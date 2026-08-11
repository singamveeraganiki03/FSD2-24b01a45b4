"use strict";
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
let a = 12;
let b = 18;
console.log("GCD =", gcd(a, b));
console.log("LCM =", lcm(a, b));
