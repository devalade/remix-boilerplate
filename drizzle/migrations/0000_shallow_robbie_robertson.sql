CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"cretaedAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
