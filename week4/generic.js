"use strict";
// Generic Class Example
class StorageBox {
    value;
    constructor(item) {
        this.value = item;
    }
    // Return the stored value
    retrieveItem() {
        console.log("Retrieving Item...");
        return this.value;
    }
    // Update the stored value
    updateItem(newValue) {
        this.value = newValue;
        console.log("Item Updated Successfully.");
    }
}
// -------- Usage --------
// Example 1: Number
const moneyBox = new StorageBox(10000);
let amount = moneyBox.retrieveItem();
console.log(`Available Amount: ₹${amount}`);
// Example 2: String
const fileBox = new StorageBox("College Certificates");
console.log(`Stored File: ${fileBox.retrieveItem()}`);
const laptopBox = new StorageBox({
    brand: "Dell",
    ram: 16
});
const myLaptop = laptopBox.retrieveItem();
console.log(`Laptop Brand: ${myLaptop.brand}`);
console.log(`RAM: ${myLaptop.ram} GB`);
// Error Example
// moneyBox.updateItem("Ten Thousand"); // Error because moneyBox stores only numbers
