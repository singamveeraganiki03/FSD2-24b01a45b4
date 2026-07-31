// any
let a: any = 10;
a = "Hello";
a = true;
console.log(a);

// unknown
let b: unknown = "TypeScript";

if (typeof b === "string") {
    console.log(b.toUpperCase());
}

// void
function printDetails(): void {
    console.log("This function returns nothing.");
}

printDetails();