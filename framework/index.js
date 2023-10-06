import * as snabbdom from "snabbdom";

const patch = snabbdom.init([snabbdom.eventListenersModule]);

/**
 * Initializes a component on a specific DOM element identified by the selector.
 *
 * @param {string} selector - The DOM selector where the component will be mounted.
 * @param {Object} component - The component to be rendered.
 * @param {Object} component.template - The template of the component to be rendered.
 * @returns {void}
 */
export const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};

let state = {};

/**
 * Creates a component with provided template, methods, and initial state.
 * The component will manage its state internally and re-render itself upon state changes.
 *
 * @param {Object} options - The options to create the component.
 * @param {Function} options.template - A function that returns the component's vnode based on the current state and props.
 * @param {Object} [options.methods={}] - An object containing methods for the component. Each method will receive the current state and any additional arguments.
 * @param {Object} [options.initialState={}] - The initial state of the component.
 * @returns {Function} - A function that takes props and returns the component's vnode with the current state and methods.
 */
export const createComponent = ({
  template,
  methods = {},
  initialState = {},
}) => {
  state = initialState;
  let previous;

  const mappedMethods = (props) =>
    Object.keys(methods).reduce(
      (acc, key) => ({
        ...acc,
        [key]: (...args) => {
          state = methods[key](state, ...args);
          const nextNode = template({
            ...props,
            ...state,
            methods: mappedMethods(props),
          });
          patch(previous.template, nextNode.template);
          previous = nextNode;
          return state;
        },
      }),
      {}
    );

  return (props) => {
    previous = template({ ...props, ...state, methods: mappedMethods(props) });
    return previous;
  };
};
