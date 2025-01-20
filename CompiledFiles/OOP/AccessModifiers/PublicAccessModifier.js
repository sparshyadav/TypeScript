"use strict";
// Public (Default Modifier)
class PublicExample {
    constructor() {
        this.data = "I am Accessible Everywhere";
    }
}
const publicObj = new PublicExample();
console.log(publicObj.data);
