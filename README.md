# Stack Underflow | Frontend

> Here's [backend repo](https://github.com/zkindest/suf-mern-gql-backend)

**TODO:**
1. Add Dark Mode.

**Update 1:** Replace `material-ui` with `twin.macro` just to practice react, CSS and make reusable components. It's hard to get it all(flexibility, performance) correct. 

**Update 2:** Migrated Server codebase to **Typescript** using `type-graphql`, `typegoose`.

**Update 3:** Migrated Client codebase to **Typescript** using `graphql`, `@graphql-codegen` 💚 ,`definitelyTyped` libs.

**Update 4: (27/10/2021)** Automated Graphql Testing using `jest`, `ts-jest`, `isomorphic-fetch`.

**Update 5: (29/10/2021)** Replaced constant growing arrays with mongoose virtuals.

**Update 6: (03/05/2022)** 
- Replace `npm` with `pnpm`
- Replace `create-react-app` with `vite`  
- Improve code, and move to Poly repo structure (Monorepo is *Awesome*,but it needs a good build system, I'm not using Nx,Turborepo, Bazel).

**Update 7: (10/05/2022-15/05/2022)** 
- Improve code
- Used Graphl code generation
- Upgraded to `apollo-client@3.6` for react 18 compatibility
- Moved to Server side rendering, improved SEO.
- Removed `yup` and used `react-hook-form` built-in validators


## Usage

#### web:

Be sure to check `.packages/web/env.example` & add necessary variables to `.env` file.

```
pnpm install
pnpm run web dev
```

## Built using

```sh
Legend: production dependency, optional only, dev only

@suf-frontend/web@0.0.0 /media/data/fullStackReact/suf-mern-gql/frontend/packages/web (PRIVATE)

dependencies:
@apollo/client 3.6.1     graphql 15.8.0           react-dom 18.1.0         react-icons 4.3.1        react-router-dom 6.3.0   web-vitals 2.1.4
date-fns 2.28.0          react 18.1.0             react-hook-form 7.30.0   react-is 18.1.0          styled-components 5.3.5

devDependencies:
@graphql-codegen/cli 1.21.8                      @types/jest 27.4.1                               graphql-tag 2.12.6
@graphql-codegen/typescript 2.4.8                @types/node 16.11.32                             rollup-plugin-analyzer 4.0.0
@graphql-codegen/typescript-operations 2.3.5     @types/react 18.0.8                              tailwindcss 2.2.19
@graphql-codegen/typescript-react-apollo 3.2.11  @types/react-dom 18.0.3                          twin.macro 2.8.2
@honkhonk/vite-plugin-svgr 1.1.0                 @types/styled-components 5.1.25                  typescript 4.6.4
@tailwindcss/typography 0.4.1                    @vitejs/plugin-react 1.3.1                       vite 2.9.6
@testing-library/jest-dom 5.16.4                 babel-plugin-macros 3.1.0
@testing-library/react 11.2.7                    babel-plugin-styled-components 2.0.7
```

For more information check this [file](./open-source.json).
