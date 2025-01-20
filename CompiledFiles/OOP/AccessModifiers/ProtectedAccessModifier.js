"use strict";
class Parent {
    constructor() {
        this.secret = "Protected Secret";
    }
}
class Child extends Parent {
    revealSecret() {
        return this.secret;
    }
}
const child = new Child();
console.log(child.revealSecret());
