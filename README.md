# Stack Underflow | Frontend

This repository contains front-end(next@12,@apollo/client, etc) code, Here's the [backend repo](https://github.com/af4oz/suf-mern-gql-backend).

## How to run this program?

### web:

Be sure to check `.packages/web/env.example` & add necessary variables to `.env` file.

```
pnpm install
pnpm run web dev
```

## Changelog

**Update 1:** Replace `material-ui` with `twin.macro` just to practice react, CSS and make reusable components. It's hard to get it all(flexibility, performance) correct.

**Update 2:** Migrated Client codebase to **Typescript** using `graphql`, `@graphql-codegen` 💚 ,`definitelyTyped` libs.

**Update 3: (03/05/2022)**

- Replace `npm` with `pnpm`
- Replace `create-react-app` with `vite`
- Improve code, and move to Poly repo structure (Monorepo is _Awesome_,but it needs a good build system, I'm not using Nx,Turborepo, Bazel).

**Update 4: (10/05/2022-15/05/2022)**

- Improve code
- Used Graphl code generation
- Upgraded to `apollo-client@3.6` for react 18 compatibility
- Moved to Server side rendering, improved SEO.
- Removed `yup` and used `react-hook-form` built-in validators
- Replace `vite` with `next.js`

## Built using

```sh
Legend: production dependency, optional only, dev only

@suf-frontend/web@0.1.0 /Users/af4oz/code/frontend/suf-mern-gql-frontend/packages/web (PRIVATE)

dependencies:
@apollo/client 3.6.2     next 12.1.6              react-hook-form 7.30.0   styled-components 5.3.5
date-fns 2.16.1          react 18.0.0             react-icons 4.3.1        web-vitals 2.1.4
graphql 15.9.0           react-dom 18.0.0         react-is 18.1.0

devDependencies:
@graphql-codegen/cli 1.21.8                      @types/react 18.0.0                              eslint 8.17.0
@graphql-codegen/typescript 2.4.8                @types/react-dom 18.0.0                          eslint-config-next 12.1.6
@graphql-codegen/typescript-operations 2.3.5     @types/styled-components 5.1.15                  postcss 8.4.49
@graphql-codegen/typescript-react-apollo 3.2.11  autoprefixer 10.4.20                             tailwindcss 2.2.19
@tailwindcss/typography 0.4.1                    babel-plugin-inline-react-svg 2.0.1              twin.macro 2.8.2
@types/node 16.10.3                              babel-plugin-macros 3.1.0                        typescript 4.7.3
```

For more information check this [file](./open-source.json).

## TODO

1. Add Dark Mode.
