class BankAccount{
    constructor(accountHolder,balance) {
        this.accountHolder=accountHolder,
        this.balance=balance
    }
    deposit = function(amount)
    {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw = function(amount)
    {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdraw ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }
    getBalance(){
        return this.balance;
    }
}
function transfer(fromAccount,toAccount,amount) {
        if(amount<=fromAccount.getBalance(amount))
        {
            fromAccount.withdraw(amount);
            toAccount.deposit(amount);
            console.log(`Transferred ${amount} from ${fromAccount.accountHolder} to ${toAccount.accountHolder}`);
        }
        else {
            console.log("Transfer failed: Insufficient funds or invalid amount.");
        }
}
let account1= new BankAccount("Alice",1000)
let account2= new BankAccount("Bob",500)
transfer(account1,account2,200);
console.log(account1.getBalance());
console.log(account2.getBalance());