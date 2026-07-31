// 1. Traditional Function
function calculateFinalAmount(bookCost: number, discountRate: number): number {
    return bookCost - (bookCost * discountRate);
}

// 2. Arrow Function
const calculateAmountArrow = (bookCost: number, discountRate: number): number => {
    return bookCost - (bookCost * discountRate);
};

// 3. Shorthand Arrow Function
const displayStoreMessage = (store: string): string =>
    `Welcome to ${store} Book Store!`;

// ----- Testing the Program -----

const originalPrice: number = 800;   // Book Price
const offerRate: number = 0.15;      // 15% Discount

console.log(displayStoreMessage("ABC"));

const amount1 = calculateFinalAmount(originalPrice, offerRate);
console.log(`Final Amount (Traditional): ₹${amount1}`);

const amount2 = calculateAmountArrow(originalPrice, offerRate);
console.log(`Final Amount (Arrow): ₹${amount2}`);

/*
INLINE COMPARISON

Traditional:
function squareValue(n: number): number {
    return n * n;
}

Arrow:
const squareValue = (n: number): number => n * n;
*/