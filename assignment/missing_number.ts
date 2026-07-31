let arr = [1, 2, 3, 5];

let n = 5;

let expected = (n * (n + 1)) / 2;

let actual = arr.reduce((sum, value) => sum + value, 0);

console.log("Missing =", expected - actual);