// Generic Class Example

class StorageBox<T> {

    private value: T;

    constructor(item: T) {
        this.value = item;
    }

    // Return the stored value
    public retrieveItem(): T {
        console.log("Retrieving Item...");
        return this.value;
    }

    // Update the stored value
    public updateItem(newValue: T): void {
        this.value = newValue;
        console.log("Item Updated Successfully.");
    }
}

// -------- Usage --------

// Example 1: Number
const moneyBox = new StorageBox<number>(10000);
let amount = moneyBox.retrieveItem();
console.log(`Available Amount: ₹${amount}`);

// Example 2: String
const fileBox = new StorageBox<string>("College Certificates");
console.log(`Stored File: ${fileBox.retrieveItem()}`);

// Example 3: Custom Object
interface Laptop {
    brand: string;
    ram: number;
}

const laptopBox = new StorageBox<Laptop>({
    brand: "Dell",
    ram: 16
});

const myLaptop = laptopBox.retrieveItem();
console.log(`Laptop Brand: ${myLaptop.brand}`);
console.log(`RAM: ${myLaptop.ram} GB`);

// Error Example
// moneyBox.updateItem("Ten Thousand"); // Error because moneyBox stores only numbers