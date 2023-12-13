import 'dotenv/config';
import type { Config } from 'drizzle-kit';

if (!process.env.DATABASE_URL) {
	throw new Error('DATABASE URL is not defined');
}

console.log({ env: process.env.DATABASE_URL! });

export default {
	schema: './app/db/schema.server.ts',
	out: './app/db/migrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.DATABASE_URL!,
	},
} satisfies Config;
