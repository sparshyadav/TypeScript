"use strict";
// Optional Parameters
function greetUser(name, greeting) {
    return `${greeting || "Hello"} ${name}`;
}
console.log(greetUser("Sparsh", "Hi"));
console.log(greetUser("Sparsh"));
