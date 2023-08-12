# 🤙 Strapi backend

Strapi backend repository made for my website krolmic.dev.

## 🔧 Setup

- Copy [.env.example.local](./.env.example.local) or [.env.example.prod](./.env.example.prod) as .env before running the project. Change the values inside .env.
- Run `yarn install` and `yarn build`.
- Execute `yarn develop` locally or configure the machine Strapi is hosted on to execute `yarn start` to run the Strapi application.

## 🕊 Postman collection

- Import [api.postman_collection.json](./api.postman_collection.json).
- Adapt the variables `API Token` and `API URL` for usage with a production instance.

## 👩‍🔬 Commitment

### Commits

Follow [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716#file-semantic-commit-messages-md).

## 🚀 Strapi commands

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```
