"use strict";
class BankDeposit {
    // Properties
    accountHolder;
    depositAmount;
    annualInterest;
    durationYears;
    // Constructor Implementation
    constructor(holder, amount, interest, years) {
        this.accountHolder = holder;
        this.depositAmount = amount;
        // Default Values
        this.annualInterest = interest ?? 6;
        this.durationYears = years ?? 2;
    }
    // Method to calculate maturity amount
    calculateAmount() {
        const interest = (this.depositAmount * this.annualInterest * this.durationYears) / 100;
        return this.depositAmount + interest;
    }
    // Method to display details
    showDetails() {
        console.log("------ Deposit Details ------");
        console.log(`Account Holder : ${this.accountHolder}`);
        console.log(`Deposit Amount : ₹${this.depositAmount}`);
        console.log(`Interest Rate  : ${this.annualInterest}%`);
        console.log(`Duration       : ${this.durationYears} year(s)`);
        console.log(`Maturity Value : ₹${this.calculateAmount()}`);
        console.log("-----------------------------\n");
    }
}
// Using Default Constructor
const normalDeposit = new BankDeposit("Rohit Verma", 60000);
// Using Overloaded Constructor
const premiumDeposit = new BankDeposit("Sneha Reddy", 120000, 8, 4);
// Display Details
normalDeposit.showDetails();
premiumDeposit.showDetails();
// Updating Property
premiumDeposit.depositAmount = 130000;
console.log(`Updated Maturity Amount for Sneha: ₹${premiumDeposit.calculateAmount()}`);
