class MathUtilities {
    static PI: number = 3.14;

    static calculateArea(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log(MathUtilities.PI);
console.log(MathUtilities.calculateArea(5));