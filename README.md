## Overview

This project is a minimalist frontend framework inspired by [mfrachet's front-end-framework tutorial](https://mfrachet.github.io/create-frontend-framework/). It provides essential features for modern web development, including a templating engine, a virtual DOM, and state management.

## Features

- **Templating Engine:** Utilize JavaScript template literals to create intuitive and dynamic HTML templates.
- **Virtual DOM:** Minimize direct DOM manipulation for optimized performance and efficient updates.
- **State Management:** Manage the component's state seamlessly with a straightforward API.
- **Event Handling:** Implement interactive UIs with an easy-to-use event handling system.

## Getting Started

### Installation

1. Clone the repository:

```sh
git clone https://github.com/NathanJGaul/create-my-own-frontend-framework.git
cd create-my-own-frontend-framework
```

2. Install the dependencies

```sh
yarn install
```

## Usage Example

Create a component, manage its state, and render it to the DOM:

```js
import { createComponent, init } from "./framework";
import { div } from "./framework/element";
import { onClick } from "./framework/event";

const methods = {
  changeName: (state, name) => ({ ...state, name }),
};

const initialState = { name: "World" };

const template = ({ name, methods }) =>
  div`${onClick(() => methods.changeName("Universe"))} Hello, ${name}!`;

const MyComponent = createComponent({ template, methods, initialState });

init("#app", MyComponent);
```

## Acknowledgments

A special thanks to [mfrachet](https://github.com/mfrachet) for providing the inspirational [tutorial](https://mfrachet.github.io/create-frontend-framework/) on creating a frontend framework.
