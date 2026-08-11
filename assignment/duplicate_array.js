"use strict";
let arr = [1, 2, 3, 2, 4, 5, 1, 6];
let duplicates = [];
for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
    }
}
console.log(duplicates);
