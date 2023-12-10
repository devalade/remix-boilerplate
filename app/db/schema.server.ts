import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('users', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull(),
	password: text('password').notNull(),
	createdAt: text('createdAt').notNull().default(`datetime("now")`),
	updatedAt: text('updatedAt').notNull().default(`datetime("now")`),
});
