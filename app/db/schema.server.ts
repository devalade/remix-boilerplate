import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: uuid('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull(),
	password: text('password').notNull(),
	createdAt: timestamp('cretaedAt', { mode: 'string' }).defaultNow(),
	updatedAt: timestamp('updatedAt', { mode: 'string' }).defaultNow(),
});
