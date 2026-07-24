export {};

// Classes

class BankAccount {
  public owner: string;
  private balance: number;
  readonly accountNumber: string;

  constructor(owner: string, accountNumber: string, balance: number = 0) {
    this.owner = owner;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }

    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("Praveen", "ACC-101", 1000);
account.deposit(500);

console.log(account.owner);
console.log(account.accountNumber);
console.log(account.getBalance());

// console.log(account.balance); // Error because balance is private
