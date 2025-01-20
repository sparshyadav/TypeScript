"use strict";
class MathUtilities {
    static calculateArea(radius) {
        return this.PI * radius * radius;
    }
}
MathUtilities.PI = 3.14;
console.log(MathUtilities.PI);
console.log(MathUtilities.calculateArea(5));
