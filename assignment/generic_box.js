"use strict";
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log(this.value);
    }
}
let numberBox = new Box(100);
let stringBox = new Box("TypeScript");
let booleanBox = new Box(true);
numberBox.display();
stringBox.display();
booleanBox.display();
