let arr = [10, 30, 40, 50, 20];

let sorted = [...new Set(arr)].sort((a, b) => b - a);

console.log("Second Largest =", sorted[1]);