import { type MetaFunction, type ActionFunctionArgs, redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { signUp } from '~/services/auth.server';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Sign up - Your new idea' },
		{ name: 'description', content: 'This is the sign up page for your new page' },
	];
};

export function loader() {
	return [];
}

export async function action({ request }: ActionFunctionArgs) {
	const body = await request.formData();
	const email = body.get('email')?.toString()!;
	const name = body.get('name')?.toString()!;
	const password = body.get('password')?.toString()!;
	await signUp({
		email,
		name,
		password,
	});
	return redirect('/sign-in');
}

export default function SignUp() {
	return (
		<div className='h-screen w-full flex items-center justify-center'>
			<Form method='post' className='w-[400px] p-6 rounded-md border space-y-4 shadow-sm'>
				<p className=' font-semibold text-2xl'>Sign up</p>
				<div>
					<Label htmlFor='name'>Name</Label>
					<Input name='name' />
				</div>
				<div>
					<Label htmlFor='email'>Email</Label>
					<Input name='email' type='email' />
				</div>
				<div>
					<Label htmlFor='password'>Password</Label>
					<Input name='password' type='password' />
				</div>
				<div className='flex items-center justify-between py-4'>
					<div className='flex items-center space-x-2'>
						<Checkbox id='terms2' disabled />
						<label
							htmlFor='terms2'
							className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Accept terms and conditions
						</label>
					</div>
					<Button>Sign in</Button>
				</div>
			</Form>
		</div>
	);
}
