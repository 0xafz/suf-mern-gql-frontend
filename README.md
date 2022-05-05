# Stack Underflow | SOF Clone | Frontend

> Here's [backend repo](https://github.com/zkindest/suf-mern-gql-backend)

**Update 1:** This project is a fork from [amand33p](https://github.com/amand33p). I have been making some efforts to replace `material-ui` with `twin.macro` just to learn react, CSS and make reusable components. It's hard to get it all correct (flexibility,ease of use, performance)

**Update 2:** Migrated Server codebase to **Typescript** using `type-graphql`, `typegoose`.

**Update 3:** Migrated Client codebase to **Typescript** using `graphql`, `@graphql-codegen` 💚 ,`definitelyTyped` libs.

**Update 4: (27/10/2021)** Automated Graphql Testing using `jest`, `ts-jest`, `isomorphic-fetch`.

**Update 5: (29/10/2021)** Replaced constant growing arrays with mongoose virtuals.

**Update 6: 03/05/2022** Make code clean and refactors, and use Poly repos.

## Future

1. <strike>Automate Graphql Testing</strike> ✔️
2. <strike>Replace constant growing arrays in schema as mongoose document sizelimit is **16MB** </strike>. ✔️
3. Use transactions in mutation resolvers which involves multiple mutating db requests.
4. Add Dark Mode.

## Usage

#### Client:

Open `.packages/app/src/constants` & change `backendUrl` variable to `"http://localhost:4000"`

```
pnpm install
pnpm run web dev
```

Fullstack [Stack Overflow](https://stackoverflow.com/) clone (QnA site) made with MERN + GraphQL

## Built using

- [ReactJS](https://reactjs.org/) - Frontend framework
- [Apollo Client](https://www.apollographql.com/docs/react/) - State management library to manage both local and remote data with GraphQL
- [Context API w/ hooks](https://reactjs.org/docs/context.html) - For state of user, toast notifs, theme etc.
- [React Router](https://reactrouter.com/) - For general routing & navigation
- [React Hook Form](https://react-hook-form.com/) - For flexible forms
- ~~[Material-UI w/ lots of CSS customisations](https://material-ui.com/)~~ now using [twin.macro](https://github.com/ben-rogerson/twin.macro)- CSS-in-JS library
- [Yup](https://github.com/jquense/yup) - For form validation
- [date-fns](https://date-fns.org/) - For manipulating & formatting of dates

## Features

- Authentication (login/register with username-password)
- CRUD questions, answers & comments
- Upvote/downvote questions & answers
- Tags for organising questions
- Page views - A view is registered whenever the question page is opened
- Pages for added tags, registered users & more
- Sorting of questions on basis of hot, votes, views, newest & oldest
- Search questions over the server on basis of question title & body
- Pagination of posts in the form of "Load More" button
- Error management to prevent app crashes
- Toast notifications for actions: adding questions, deleting comments etc.
- Loading spinners for relevant fetching processes
- Formatted dates for adding/updating questions/answers/comments
- <strike>Dark mode toggle w/ local storage save</strike>
- Proper responsive UI for all screens

## Screenshots

#### Desktop/Tablet

![Desktop-1](https://github.com/amand33p/stack-underflow-mern-gql/blob/master/screenshots/desktop-1.jpg)
![Desktop-2](https://github.com/amand33p/stack-underflow-mern-gql/blob/master/screenshots/desktop-2.jpg)
![Desktop-3](https://github.com/amand33p/stack-underflow-mern-gql/blob/master/screenshots/desktop-3.jpg)
![Desktop-4](https://github.com/amand33p/stack-underflow-mern-gql/blob/master/screenshots/desktop-4.jpg)
![Desktop-5](https://github.com/amand33p/stack-underflow-mern-gql/blob/master/screenshots/desktop-5.jpg)

#### Mobile

![Mobile-1](https://github.com/amand33p/stack-underflow-mern-gql/blob/master/screenshots/mobile-1.jpg)
![Mobile-2](https://github.com/amand33p/stack-underflow-mern-gql/blob/master/screenshots/mobile-2.jpg)
![Mobile-3](https://github.com/amand33p/stack-underflow-mern-gql/blob/master/screenshots/mobile-3.jpg)
![Mobile-4](https://github.com/amand33p/stack-underflow-mern-gql/blob/master/screenshots/mobile-4.jpg)
![Mobile-5](https://github.com/amand33p/stack-underflow-mern-gql/blob/master/screenshots/mobile-5.jpg)
