import { h } from "snabbdom";

const initialState = {
  template: "",
  on: {},
};

/**
 * Creates a reducer function to build an element's template and event handlers.
 *
 * @param {Array} args - The values to be interpolated into the template strings.
 * @returns {Function} A reducer function that accumulates the template and event handlers.
 */
const createReducer = (args) => (acc, currentString, index) => {
  const currentArg = args[index];

  if (currentArg && currentArg.type === "event") {
    return { ...acc, on: { click: currentArg.click } };
  }

  return {
    ...acc,
    template: acc.template + currentString + (currentArg || ""),
  };
};

/**
 * Creates an element with a specified tag name, template strings, and interpolated values.
 *
 * @param {string} tagName - The tag name of the element to be created.
 * @returns {Function} A function that takes template strings and interpolated values and returns an element object.
 */
const createElement =
  (tagName) =>
  (strings, ...args) => {
    const { template, on } = strings.reduce(createReducer(args), initialState);

    return {
      type: "element",
      template: h(tagName, { on }, template),
    };
  };


/**
 * Creates a div element with the provided template strings and interpolated values.
 *
 * @type {Function}
 * @param {TemplateStringsArray} strings - The template strings for the div element.
 * @param {...*} args - The values to be interpolated into the template strings.
 * @returns {Object} An object representing the div element, with a type property and a template property containing the vnode.
 */
export const div = createElement("div");

/**
 * Creates a p element with the provided template strings and interpolated values.
 *
 * @type {Function}
 * @param {TemplateStringsArray} strings - The template strings for the p element.
 * @param {...*} args - The values to be interpolated into the template strings.
 * @returns {Object} An object representing the p element, with a type property and a template property containing the vnode.
 */
export const p = createElement("p");
