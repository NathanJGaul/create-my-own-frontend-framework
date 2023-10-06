/**
 * Creates an object representing a click event handler.
 *
 * @param {Function} f - The function to be executed when the click event occurs.
 * @returns {Object} An object containing the event type and the click event handler function.
 */
export const onClick = (f) => ({
  type: "event",
  click: f,
});
