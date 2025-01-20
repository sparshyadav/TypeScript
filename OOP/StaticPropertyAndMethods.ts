class MathUtilities {
    static PI: number = 3.14;

    static calculateArea(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log(MathUtils.PI);
console.log(MathUtils.calculateArea(5));