CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`createdAt` text DEFAULT 'datetime("now")' NOT NULL,
	`updatedAt` text DEFAULT 'datetime("now")' NOT NULL
);
