// Assignment 6: Bank Account Class
// ================================
//
// Build a BankAccount class.
//
// Requirements:
// 1. Account should have owner, accountNumber, and private balance
// 2. Add deposit(amount)
// 3. Add withdraw(amount)
// 4. Add getBalance()
// 5. Prevent negative deposit/withdraw amounts
// 6. Prevent withdrawing more than balance
// 7. Keep accountNumber readonly
// 8. Test with at least 3 accounts
//
// Bonus:
// - Add SavingsAccount class
// - Keep transaction history

interface Transaction {
  id: string;
  type: "DEPOSIT" | "WITHDRAW" | "INTEREST";
  amount: number;
  timestamp: Date;
  success: boolean;
  remarks?: string;
}

// --- CORE CLASS: BANK ACCOUNT ---
class BankAccount {
  readonly accountNumber: string;
  public owner: string;
  private _balance: number;
  protected transactions: Transaction[] = [];

  constructor(
    owner: string,
    accountNumber: string,
    initialBalance: number = 0,
  ) {
    this.owner = owner;
    this.accountNumber = accountNumber;

    if (initialBalance < 0) {
      this._balance = 0;
      this.logTransaction(
        "DEPOSIT",
        0,
        false,
        "Initial balance cannot be negative. Set to 0.",
      );
    } else {
      this._balance = initialBalance;
      if (initialBalance > 0) {
        this.logTransaction(
          "DEPOSIT",
          initialBalance,
          true,
          "Account opened with initial balance.",
        );
      }
    }
  }

  // Gets the private balance
  public getBalance(): number {
    return this._balance;
  }

  // Deposits money into the account
  public deposit(amount: number): boolean {
    if (amount <= 0) {
      this.logTransaction(
        "DEPOSIT",
        amount,
        false,
        "Deposit amount must be positive.",
      );
      console.error(`[Error] Deposit failed: Amount must be positive.`);
      return false;
    }

    this._balance += amount;
    this.logTransaction("DEPOSIT", amount, true);
    return true;
  }

  // Withdraws money from the account
  public withdraw(amount: number): boolean {
    if (amount <= 0) {
      this.logTransaction(
        "WITHDRAW",
        amount,
        false,
        "Withdrawal amount must be positive.",
      );
      console.error(`[Error] Withdrawal failed: Amount must be positive.`);
      return false;
    }

    if (amount > this._balance) {
      this.logTransaction("WITHDRAW", amount, false, "Insufficient funds.");
      console.error(`[Error] Withdrawal failed: Insufficient funds.`);
      return false;
    }

    this._balance -= amount;
    this.logTransaction("WITHDRAW", amount, true);
    return true;
  }

  // Fetches full transaction ledger
  public getHistory(): Transaction[] {
    return [...this.transactions]; // Returns a shallow copy to protect internal state
  }

  // Helper method to track transactions
  protected logTransaction(
    type: Transaction["type"],
    amount: number,
    success: boolean,
    remarks?: string,
  ): void {
    this.transactions.push({
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      type,
      amount,
      timestamp: new Date(),
      success,
      remarks,
    });
  }
}

class SavingsAccount extends BankAccount {
  public interestRate: number; // e.g., 0.05 for 5%

  constructor(
    owner: string,
    accountNumber: string,
    initialBalance: number = 0,
    interestRate: number = 0.02,
  ) {
    super(owner, accountNumber, initialBalance);
    this.interestRate = interestRate;
  }

  // Calculates and deposits interest based on current balance
  public applyInterest(): void {
    const interestEarned = this.getBalance() * this.interestRate;
    if (interestEarned > 0) {
      // Direct access to modify private _balance via super methods isn't needed if we use internal logic,
      // but since _balance is private, we execute a direct deposit workflow or modify internal ledger.
      // To strictly follow rules, we temporarily deposit via a specialized wrapper or standard deposit.
      this.deposit(interestEarned);

      // Update the last transaction type to INTEREST for accurate record keeping
      const lastTx = this.transactions[this.transactions.length - 1];
      if (lastTx) {
        lastTx.type = "INTEREST";
        lastTx.remarks = `Applied annual interest rate of ${(this.interestRate * 100).toFixed(2)}%`;
      }
    }
  }
}

console.log("=== STARTING BANK SYSTEM TESTING ===\n");

// Account 1: Standard Checking Account
console.log("--- Testing Account 1: Alice (Standard Account) ---");
const account1 = new BankAccount("Alice Smith", "ACC-1001", 500);
account1.deposit(200);
account1.withdraw(100);
account1.withdraw(1000); // Should fail: Insufficient funds
account1.deposit(-50); // Should fail: Negative amount
console.log(`Alice's Final Balance: $${account1.getBalance()}`);
console.log("Transaction History:", account1.getHistory());
console.log("\n");

// Account 2: Standard Checking Account (Edge Cases)
console.log("--- Testing Account 2: Bob (Edge Cases) ---");
const account2 = new BankAccount("Bob Jones", "ACC-1002", -100); // Should force set to 0
account2.deposit(50);
console.log(`Bob's Final Balance: $${account2.getBalance()}`);
// account2.accountNumber = "NEW-NUM"; // Error: Cannot assign to 'accountNumber' because it is a read-only property.
console.log("\n");

// Account 3: Savings Account (Bonus Feature)
console.log("--- Testing Account 3: Charlie (Savings Account) ---");
const account3 = new SavingsAccount("Charlie Brown", "SAV-2001", 1000, 0.05); // 5% Interest
account3.deposit(500);
account3.applyInterest(); // 1500 * 0.05 = 75 interest
console.log(
  `Charlie's Final Balance (with Interest): $${account3.getBalance()}`,
);
console.log("Transaction History:", account3.getHistory());
