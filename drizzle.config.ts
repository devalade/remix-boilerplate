import 'dotenv/config';

import type { Config } from 'drizzle-kit';
export default {
	schema: './app/db/schema.server.ts',
	out: './drizzle',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.DATABASE_URL!,
	},
} satisfies Config;
