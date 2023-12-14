// app/services/auth.server.ts
import { Authenticator } from 'remix-auth';
import { sessionStorage } from '~/services/session.server';
import { db } from '~/db/config.server';
import { FormStrategy } from 'remix-auth-form';
import { users } from '~/db/schema.server';
import { hash, verify } from 'argon2';
import { v4 } from 'uuid';
import { eq } from 'drizzle-orm';

async function login(email: string, password: string) {
	const [user] = await db.select().from(users).where(eq(users.email, email)).execute();
	if (!user) {
		return null;
	}
	if (!(await verify(user.password, password))) {
		throw new Error('Email or password is incorrect~');
	}
	return user;
}

export async function signUp({
	email,
	name,
	password,
}: {
	email: string;
	name: string;
	password: string;
}) {
	const hashPassword = await hash(password);
	return db.insert(users).values({ id: v4(), email, name, password: hashPassword });
}

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<typeof users.$inferSelect | null>(sessionStorage);

// Tell the Authenticator to use the form strategy
authenticator.use(
	new FormStrategy(async ({ form }) => {
		let email = form.get('email');
		let password = form.get('password');
		let user = await login(email!.toString(), password!.toString());
		console.log({ user });
		return user;
	}),
	'user-pass'
);
