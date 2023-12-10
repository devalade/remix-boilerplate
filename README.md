# Remix Boilerplate

## Database setup

Create the database and generate the migration

```sh
touch ./app/db/database.db
bun db:migrations
```

## Development

From your terminal:

```sh
bun dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
bun build
```

Then run the app in production mode:

```sh
bun start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

-   `build/`
-   `public/build/`
