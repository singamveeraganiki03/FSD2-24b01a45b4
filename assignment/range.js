"use strict";
function isPrime(num) {
    if (num <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
function primeRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (isPrime(i))
            console.log(i);
    }
}
primeRange(1, 50);
