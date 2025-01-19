// Any
let randomVal: any = "hello";
randomVal = 23;
randomVal = true;



// Unknown
let val: unknown = "hello";
// val.toUpperCase(); // Error
if (typeof val === "string") {
    console.log(val.toUpperCase()); // Safe
}



// Void
function loggMessage(message: string): void {
    console.log(message);
}

loggMessage("This is a Message");



// Never
function throwError(message: string): never {
    throw new Error(message);
}

throwError("Throwing Error");
