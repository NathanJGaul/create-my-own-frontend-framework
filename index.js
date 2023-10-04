import { init } from "./framework";
import { User } from "./src/user";

const firstName = "Nathan";
const lastName = "Gaul";

init("#app", User({ firstName, lastName }));
