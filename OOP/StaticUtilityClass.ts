// Write a static class MathUtils that includes methods for:
// Calculating the factorial of a number.
// Finding the greatest common divisor (GCD) of two numbers.
class MathUtils {
    static factorial(n: number): number {
        if (n < 0) throw new Error("Factorial is not defined for negative numbers.");
        if (n === 0 || n === 1) return 1;
        return n * MathUtils.factorial(n - 1);
    }

    static gcd(a: number, b: number): number {
        if (!b) return a;
        return MathUtils.gcd(b, a % b);
    }
}

console.log(MathUtils.factorial(5));
console.log(MathUtils.gcd(48, 18));