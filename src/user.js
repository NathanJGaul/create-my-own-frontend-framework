import { CreateComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const initialState = { firstName: "Nathan", lastName: "Gaul" };

const methods = {
  changeName: (state, firstName) => ({ ...state, firstName }),
};

const template = ({ firstName, lastName }) =>
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}`;

export const User = CreateComponent({ template, methods, initialState });
