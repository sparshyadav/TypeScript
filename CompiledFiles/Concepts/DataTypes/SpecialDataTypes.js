"use strict";
// Any
let randomVal = "hello";
randomVal = 23;
randomVal = true;
// Unknown
let val = "hello";
// val.toUpperCase(); // Error
if (typeof val === "string") {
    console.log(val.toUpperCase()); // Safe
}
// Void
function loggMessage(message) {
    console.log(message);
}
loggMessage("This is a Message");
// Never
function throwError(message) {
    throw new Error(message);
}
throwError("Throwing Error");
