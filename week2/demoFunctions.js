"use strict";
// Program: Demonstrate Function, Parameter Types, and Return Types
// Includes: Default Parameters, Optional Parameters, and Rest Parameters
// 1. Function with Default Parameter
// 'age' has a default value of 18
function showStudent(name, age = 18) {
    console.log("Name:", name);
    console.log("Age:", age);
}
console.log("----- Default Parameter -----");
showStudent("Rahul"); // Uses default age
showStudent("Anjali", 20); // Uses provided age
// --------------------------------------------------
// 2. Function with Optional Parameter
// 'email' is optional because of '?'
function showEmployee(id, email) {
    console.log("Employee ID:", id);
    if (email) {
        console.log("Email:", email);
    }
    else {
        console.log("Email not provided");
    }
}
console.log("\n----- Optional Parameter -----");
showEmployee(101);
showEmployee(102, "abc@gmail.com");
// --------------------------------------------------
// 3. Function with Rest Parameter
// Accepts any number of numeric arguments
function findSum(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log("\n----- Rest Parameter -----");
let total = findSum(10, 20, 30, 40);
console.log("Total Sum =", total);
