import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

/**
 * The methods that the User component uses to handle events and update its state.
 * @type {Object}
 */
const methods = {
  /**
   * Updates the firstName property of the component's state.
   *
   * @param {Object} state - The current state of the component.
   * @param {string} firstName - The new first name to update the state with.
   * @returns {Object} The updated state object.
   */
  changeName: (state, firstName) => ({ ...state, firstName }),
};

/**
 * The initial state of the User component, containing default values for firstName and lastName.
 * @type {Object}
 */
const initialState = { firstName: "Nathan", lastName: "Gaul" };

/**
 * The template function for the User component. 
 * It returns a div element that displays a greeting message and handles click events to change the firstName.
 *
 * @param {Object} props - The properties passed to the template.
 * @param {string} props.firstName - The first name to be displayed.
 * @param {string} props.lastName - The last name to be displayed.
 * @param {Object} props.methods - The methods available for the template to use for events and state updates.
 * @returns {Object} The vnode representing the div element.
 */
const template = ({ firstName, lastName, methods }) =>
  div`${onClick(() =>
    methods.changeName("Nate")
  )} Hello ${firstName} ${lastName}`;

/**
 * The User component, created using the createComponent function from the framework.
 * It displays a user's first and last name and allows the first name to be changed on click events.
 *
 * @type {Function}
 * @param {Object} props - The properties to pass into the User component for rendering.
 * @returns {Object} The vnode representing the rendered User component.
 */
export const User = createComponent({ template, methods, initialState });
