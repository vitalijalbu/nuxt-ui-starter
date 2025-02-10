# Base

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and
disable
Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for
type checking. In editors, we
need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented
a [Take-Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more
performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Add private registry

## Run command

Run the following command to configure your npm client to use the CodeArtifact repository.

```sh
npm run co:login
```

### Manually
> Configure your npm client using this AWS CLI CodeArtifact command.

The login command fetches an authorization token that lasts 12 hours from CodeArtifact using your AWS credentials. It configures npm for use with CodeArtifact by editing the %USERPROFILE%\\.npmrc file to set the npm registry to the repository specified by the `--repository` option. For npm 6 and lower, it also adds `always-auth=true` so the authorization token is sent for every npm command.

```sh
aws codeartifact login --tool npm --repository npm --domain base-<environment> --domain-owner <aws_account_d> --region <aws_region>
```