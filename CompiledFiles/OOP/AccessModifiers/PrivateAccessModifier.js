"use strict";
class PrivateExample {
    constructor() {
        this.secret = "This is Private!";
    }
    revealSecret() {
        return this.secret;
    }
}
const privateObj = new PrivateExample();
console.log(privateObj.revealSecret());
