class Account {
    accountNumber;
    balance;
    history;
    status;
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Số tiền nạp phải lớn hơn 0");
            return;
        }
        this.balance += amount;
        this.history.push(`Nạp +${amount}, số dư ${this.balance}}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        else if (amount > this.balance) {
            console.log("Không dủ số dư để rút");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
    }
    showHistory() {
        console.log(`Lịch sử giao dịch tài khoản ${this.accountNumber}:`);
        this.history.forEach((item) => console.log(item));
    }
}
class SavingAccount extends Account {
    interestRate;
    constructor(accountNumber, initialBalance, interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Không đủ số dư. Chỉ dược rút tối đa số dư hiện tại");
            return;
        }
        this.balance -= amount;
        if (this.balance < 0) {
            this.balance = 0;
        }
        this.history.push(`Rút (SavingAccount): -${amount}, Số dư: ${this.balance}`);
    }
}
class CheckingAccount extends Account {
    overdraftLimit;
    constructor(accountNumber, initialBalance, overdraftLimit) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        const minBalance = -this.overdraftLimit;
        const nextBalance = this.balance - amount;
        if (nextBalance < minBalance) {
            console.log("vượt hạn mức thấu chi");
            return;
        }
        this.balance = nextBalance;
        this.history.push(`Rút (checking): -${amount} | Số dư ${this.balance}`);
    }
}
const ca = new CheckingAccount("CK-001", 500, 300);
ca.deposit(200);
ca.withdraw(800);
ca.withdraw(250);
ca.withdraw(200);
ca.deposit(50);
ca.showHistory();
export {};
