class SmartAccount {

    // PUBLIC
    public ownerName: string;

    // PRIVATE
    private accountBalance: number;
    private accountPin: number;

    // PROTECTED
    protected rewardPoints: number = 0;

    constructor(name: string, balance: number, pin: number) {
        this.ownerName = name;
        this.accountBalance = balance;
        this.accountPin = pin;
    }

    // PUBLIC METHOD
    public debitAmount(amount: number, enteredPin: number): void {

        if (this.checkPin(enteredPin)) {

            if (this.accountBalance >= amount) {
                this.accountBalance -= amount;
                console.log(`₹${amount} debited successfully.`);
                console.log(`Available Balance: ₹${this.accountBalance}`);
            }
            else {
                console.log("Insufficient Balance.");
            }

        } else {
            console.log("Invalid PIN. Transaction Failed.");
        }
    }

    // PUBLIC METHOD
    public showBalance(pin: number): void {
        if (this.checkPin(pin)) {
            console.log(`Current Balance: ₹${this.accountBalance}`);
        } else {
            console.log("Wrong PIN.");
        }
    }

    // PRIVATE METHOD
    private checkPin(pin: number): boolean {
        return this.accountPin === pin;
    }
}

// Child Class
class GoldAccount extends SmartAccount {

    public addReward(): void {
        this.rewardPoints += 200;
        console.log(`Reward Points: ${this.rewardPoints}`);
    }
}

// -------- Main Program --------

const userAccount = new SmartAccount("Rahul Kumar", 25000, 5678);

// Access Public Property
console.log(`Account Holder: ${userAccount.ownerName}`);

// Access Public Methods
userAccount.showBalance(5678);
userAccount.debitAmount(5000, 5678);
userAccount.showBalance(5678);

// Child Class Object
const goldUser = new GoldAccount("Priya Sharma", 50000, 1111);
goldUser.addReward();

// The following lines will give errors if uncommented
// console.log(userAccount.accountBalance);
// console.log(userAccount.accountPin);
// userAccount.checkPin(5678);