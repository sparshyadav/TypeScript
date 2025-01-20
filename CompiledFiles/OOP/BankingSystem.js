"use strict";
// Create a BankAccount class with the following features:
// Properties: accountNumber (readonly), accountHolder (public), and balance (private).
// Methods:
// deposit(amount: number): Adds the specified amount to the balance.
// withdraw(amount: number): Deducts the specified amount if sufficient balance is available.
// getBalance(): Returns the current balance.
// Use a readonly modifier for accountNumber.
class BankAccount {
    constructor(accNumber, accHolder, bal) {
        this.accountNumber = accNumber;
        this.accountHolder = accHolder;
        this.balance = bal;
    }
    deposit(value) {
        if (value > 0) {
            this.balance += value;
            console.log(`${value} deposited into Bank Account`);
        }
        else {
            throw new Error("You Cannot Deposit a Negative Value");
        }
    }
    withdraw(value) {
        if (value <= this.balance) {
            this.balance -= value;
            console.log(`${value} withdrawn from Bank Account`);
        }
        else {
            throw new Error("You Cannot Withdraw more than your Account Balance");
        }
    }
    getBalance() {
        return this.balance;
    }
}
let acc = new BankAccount(478543534, "Sparsh Yadav", 1000000);
acc.deposit(200);
acc.withdraw(300);
console.log(acc.getBalance());
