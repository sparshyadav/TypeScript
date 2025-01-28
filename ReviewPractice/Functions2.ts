// Create a function with optional and default parameters to calculate the total price, including tax.
function calculateFinalPrice(mrp: number, taxRate: number = 30, discount?: number): number {
    let taxedAmount = mrp;
    if (discount) {
        taxedAmount = mrp + (taxRate / 100) * mrp;
    }

    let finalPrice = taxedAmount + (taxRate / 100) * taxedAmount;

    return finalPrice;
}

console.log(calculateFinalPrice(300, 20, 10));
console.log(calculateFinalPrice(500, 20));
console.log(calculateFinalPrice(500));