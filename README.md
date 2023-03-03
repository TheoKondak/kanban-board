- [Kanban Tickets](#kanban-tickets)
  - [Specifications](#specifications)
    - [Tasks](#tasks)
  - [Code Linting](#code-linting)
  - [Start the app](#start-the-app)
  - [API Schema](#api-schema)
  - [Packages Used](#packages-used)
    - [Axios](#axios)
    - [React](#react)
    - [React Router](#react-router)
    - [React Edit Text](#react-edit-text)
    - [Tailwind CSS](#tailwind-css)
    - [React DND](#react-dnd)
  - [Theme](#theme)
    - [Dark Theme](#dark-theme)
    - [Styling Approach](#styling-approach)
  - [Kanban Flow Diagram](#kanban-flow-diagram)
  - [Testing](#testing)
    - [Performance, Accessibility, SEO](#performance-accessibility-seo)
    - [Testing HTTP Requests](#testing-http-requests)
    - [Unit Testing](#unit-testing)
  - [Issues](#issues)
    - [Known Issues](#known-issues)
    - [Fixed Issues](#fixed-issues)
  - [Future Updates](#future-updates)
  - [Resources](#resources)
    - [Edit Input and Textarea](#edit-input-and-textarea)
    - [Draggable Tickets](#draggable-tickets)
    - [Modal](#modal)
    - [Router](#router)
    - [Tailwind CSS](#tailwind-css-1)
    - [Setting Up the project (Vite, React, TypeScript, Vitest, Testing-Library, Eslint, Prettier)](#setting-up-the-project-vite-react-typescript-vitest-testing-library-eslint-prettier)

# Kanban Tickets

## Specifications

Create a minimal Kanban board on which you can create, view and move tickets between columns.

### Tasks

- be able to create tickets on the board.
- be able to move tickets between the various columns in an interactive way, persisting across page refreshes.
- be able to share a direct link to the ticket.

For more read the [specifications](https://github.com/madewithlove/technical-assignment-front-end-engineer-TheoKondak/blob/main/docs/specifications.md) document.

## Code Linting

For linting this project adopts the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## Start the app

To start the app, you will need Node.js and npm or yarn. 

- Make Sure `Node.js` and `npm` are installed. Open a terminal and type `node -v` to see the version of Node.js. If you get an error or your version is older than 16.0.0, you need to download the [latest version](https://nodejs.org/en/download/).
- Open a terminal in the root directory of the project, and install the npm packages required by running `npm install`.
- The application has a front end as well as a mock JSON-server to act as a temporary backend endpoint for the data. We need both running at the same time to be able to view the app.

| Operation | Command |
|---|---|
| Start JSON-server | `npm run server` |
| Start React App | `npm run dev` |

> NOTE: By default, `JSON-server` runs on port 3000. Sometimes the port is not available which might cause the server to run on another port. In that case, create a `.env` file and add: `VITE_SERVER_URL='http://localhost:XXXX'`, where `XXXX` place the port that is mentioned in the terminal. Make sure you restart vite server after any change to `.env` file so that the changes take effect.


## API Schema

Below is a short version of the API Schema. You can also view the full Schema [here](https://github.com/madewithlove/technical-assignment-front-end-engineer-TheoKondak/blob/main/docs/API_SCHEMA.json).

```
- Kanban: Array
  - settings: Object
    - kanban: Object
      - logo: Object
        - src: String
        - width: String
        - height: String
        - alt: String
      - footer: Object
        - copyrightInfo: String
        - githubLink: String
        - githubLinkOpensInNewTab: Boolean
    - tickets: Object
      - ticketPreviewLength: String
  - columns: Array
    - id : Number
    - title: String
  - tickets: Array
    - id: Number
    - columnId: Number
    - title: String
    - content: String

```
TODO explain the schema

## Packages Used

This project has several dependencies. To find an exhaustive list please check `package.json, `dependencies`, and `devDependencies`.

### Axios

Axios is the industry standard when it comes to HTTP requests. There are alternative methods of querying data, like [React Query](https://react-query-v3.tanstack.com/), but the project is simple at this stage, so there is no need for it.

### React

React, is considered the golden standard for developing web applications. It's well tested, well maintained with a huge ecosystem of other libraries that work out of the box with it. To create the app, I used Vite instead of CRA for [several reasons](https://vitejs.dev/guide/why.html).

### React Router

For handling routes, I chose React Router, again because it is the industry standard. Unfortunately, the library often has a lot of breaking changes, which makes it a bit harder to use and to update in the future for a range of reasons. For this application, I used the latest version, `"react-router": "^6.8.2",`

### React Edit Text

For handling textfields I used [React Edit Text](https://github.com/bymi15/react-edit-text) which is pretty straightforward to use even though it is not so popular. 

### Tailwind CSS

For designing the interface, I used [Tailwind CSS](https://tailwindcss.com/docs/installation), which is one of the preferred methods in the industry, along [Styled Components](https://styled-components.com/).

### React DND

For implementing the Drag and Drop functionality I used [React DND](https://github.com/react-dnd/react-dnd/), mostly because it is more up-to-date, and better maintained than its alternatives like [React-Beautiful-Dnd](https://github.com/atlassian/react-beautiful-dnd).


## Theme

The Kanban interface is pretty minimal when it comes to design. Color wise, Tailwind color gamuts are used to create a theme (view the [tailwind config](https://github.com/madewithlove/technical-assignment-front-end-engineer-TheoKondak/blob/main/tailwind.config.cjs) file). The current approach is based on the Monochromatic design principles, since a Kanban dashboard is a professional tool that needs to be minimal, without complicated design patterns that will become tiresome to the user after a while.

The color palette can be easily changed by changing the `primary` color. See more available colors [here](https://tailwindcss.com/docs/customizing-colors).

```TSX
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
                primary: colors.slate,
                companyColor: '#ff6224',
        }
    }
  }
}

```

### Dark Theme

By default a high-key color palette is chosen. That means mostly bright colors. Dark themes are very popular though, and a lot of users find them more attractive. This kanban dashboard supports dark theme. To enable it click on the top right corner icon.

### Styling Approach

The styling of the application has been done with Tailwind CSS, mostly written in the Component `tsx` files. In some cases, that was not possible, and thus the styling for these components can be found in `App.css`. 

## Kanban Flow Diagram

> NOTE: Some diagrams are using [Mermaid Syntax](https://mermaid.js.org/). Github supports it by default. If you are viewing this file on VSCode there are plugins (ex [Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)) that will be able to read and display the diagrams. 

```mermaid
flowchart TD
    A[Kanban Board] -->I[Modal]
    A[Kanban Board] -->B
    B[Kanban Column] --> D(Tickets list)
    B[Kanban Column] --> C(Create Ticket)
    C --> E(Create Ticket)
    D --> E(Ticket)
    E --> H(Drop to another column)
    E --> J(View Ticket)
    J --> F(Edit Ticket)
    J --> I[Modal]
    F --> I[Modal]
   
```

## Testing

### Performance, Accessibility, SEO

At the moment, there is no build version of the application - still some TSX issues to be fixed -, thus please do not take under consideration the **Performance** tests of the Google Lighthouse. 

**Accessibility** testing yelds an 100% score, so no further improvements to be made.

Since this is an internal application, SEO is irrelevant, thus no special attention has been paid to it. That being said, some static meta description has been added, as well as relevant HTML attributes to HTML elements where required (also to improve accessibility).

You can view the results of the Google Lighthouse tests [here](https://github.com/madewithlove/technical-assignment-front-end-engineer-TheoKondak/tree/main/tests/lighthouse%20reports).

### Testing HTTP Requests

For testing HTTP Requests I am using [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client), a VSCode plugin. REST Client performs quick HTTP requests in a local environment. It's fast and easy to set up.

To run the tests open  `requests/kanban.rest` and press **Send Request**

### Unit Testing

TODO

## Issues

### Known Issues

- Typescript is only partially implemented, some interfaces need to be updated. So `npm run build` ing the project is not possible at the moment.
- Modal in desktop resolutions renders off-center.
- Some components, like Button are not used everywhere.

### Fixed Issues

- When someone tries to visit a non-existing Ticket (ex `http://127.0.0.1:5173/ticket/someWrongURL`), then some errors occur in the console. This is due to React Router route handling.
- When someone visits a ticket by typing the URL, then the Modal does not pop up. It is being inserted into the DOM, but it does not display.
- When the page refreshes, the columns reset (I am not sending PUT to the backend)
- When a ticket is updated, the interface does not rerender
- Drag and drop is working only on desktop devices (no touch support)
- Several design issues in all screen sizes.

## Future Updates

This app has some bare-bones capabilities, based on the [requested specifications](https://github.com/madewithlove/technical-assignment-front-end-engineer-TheoKondak#technical-assignment-front-end-engineer). That means that it lacks basic functionality, such as deleting a ticket.

- Add Delete Ticket functionality
- Add user authentication
- Request data from the server in some interval or on some action (create, edit Ticket).
- To be able to rearrange the order of the tickets in a column
- Add a state management tool like Redux
- Document components with Storybooks
- Test components with Playwright
- Depending on the audience of the application, improve Accessibility & SEO
- Add theme capabilities
- Integrate more thorough testing
- Remove `react-edit-text` because it provides limited support in some cases, like styling, and sometimes has problematic interactivity.
- Add support for Markdown
- Add support for multiple languages

## Resources

### Edit Input and Textarea

- https://brianmin.com/react-edit-text/
- https://www.npmjs.com/package/react-edit-text

### Draggable Tickets

- https://react-dnd.github.io/react-dnd/about

### Modal

- https://biagio.dev/posts/tailwindcss-react-modal

### Router

- https://reactrouter.com/en/main/start/faq#why-does-route-have-an-element-prop-instead-of-render-or-component
- https://reactrouter.com/en/main/start/tutorial
- https://github.com/remix-run/react-router/tree/dev/examples/modal

### Tailwind CSS

- https://tailwindcss.com/docs/customizing-colors
- https://tailwindcss.com/docs/installation

### Setting Up the project (Vite, React, TypeScript, Vitest, Testing-Library, Eslint, Prettier)

- https://www.youtube.com/watch?v=cchqeWY0Nak&ab_channel=CodingGarden