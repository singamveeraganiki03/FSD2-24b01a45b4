"use strict";
// any
let a = 10;
a = "Hello";
a = true;
console.log(a);
// unknown
let b = "TypeScript";
if (typeof b === "string") {
    console.log(b.toUpperCase());
}
// void
function printDetails() {
    console.log("This function returns nothing.");
}
printDetails();
