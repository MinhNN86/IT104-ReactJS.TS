class Account {
  accountNumber: string;
  protected balance: number;
  protected history: string[];
  protected status: string;

  constructor(accountNumber: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.history = [];
    this.status = "active";
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Số tiền nạp phải lớn hơn 0");
      return;
    }
    this.balance += amount;
    this.history.push(`Nạp +${amount}, số dư ${this.balance}}`);
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Số tiền rút phải lớn hơn 0");
      return;
    } else if (amount > this.balance) {
      console.log("Không dủ số dư để rút");
      return;
    }
    this.balance -= amount;
    this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
  }

  showHistory(): void {
    console.log(`Lịch sử giao dịch tài khoản ${this.accountNumber}:`);
    this.history.forEach((item) => console.log(item));
  }
}

class SavingAccount extends Account {
  interestRate: number;
  constructor(
    accountNumber: string,
    initialBalance: number,
    interestRate: number
  ) {
    super(accountNumber, initialBalance);
    this.interestRate = interestRate;
  }

  override withdraw(amount: number): void {
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
    this.history.push(
      `Rút (SavingAccount): -${amount}, Số dư: ${this.balance}`
    );
  }
}

const saving = new SavingAccount("AC123456", 1000, 5);

saving.deposit(500);

saving.withdraw(300);

saving.withdraw(1500);

saving.withdraw(1200);

saving.showHistory();
