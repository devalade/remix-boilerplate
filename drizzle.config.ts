import type { Config } from 'drizzle-kit';
export default {
	schema: './app/db/schema.server.ts',
	out: './drizzle',
	driver: 'better-sqlite',
	dbCredentials: {
		url: './app/db/database.db',
	},
} satisfies Config;
