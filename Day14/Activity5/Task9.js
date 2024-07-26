class Account {
    #balance = 0;

    constructor(initialBalance = 0) {
        if (initialBalance >= 0) {
            this.#balance = initialBalance;
        } else {
            console.error("Initial balance cannot be negative.");
        }
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.error("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else if (amount > this.#balance) {
            console.error("Insufficient funds.");
        } else {
            console.error("Withdrawal amount must be positive.");
        }
    }
}

// Usage example
const myAccount = new Account(100);
console.log(`Initial balance: $${myAccount.getBalance()}`);

myAccount.deposit(50);  // Output: Deposited: $50. New balance: $150
myAccount.withdraw(30); // Output: Withdrew: $30. New balance: $120
myAccount.withdraw(200); // Output: Insufficient funds.

console.log(`Final balance: $${myAccount.getBalance()}`); // Output: Final balance: $120
