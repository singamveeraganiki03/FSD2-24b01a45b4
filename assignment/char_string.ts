let str = "typescript";
let frequency: { [key: string]: number } = {};

for (let ch of str) {
    frequency[ch] = (frequency[ch] || 0) + 1;
}

console.log(frequency);