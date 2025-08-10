//! Class & Instance
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Xin chao toi la ${this.name}`);
    }
}
const person = new Person("Demo");
person.greet();
//! Accss Modifier
// Lớp cha
class Person2 {
    name;
    _age;
    email;
    constructor(name, _age, email) {
        this.name = name;
        this._age = _age;
        this.email = email;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.log("Invalid age");
        }
    }
    showInfo() {
        console.log(`Name: ${this.name}, Age ${this._age}, Email:${this.email}`);
    }
}
// Khởi tạo đối tượng
const person2 = new Person2("Demo", 18, "demo@gmail.com");
//Public - truy cập và chỉnh sửa được
console.log(person2.name);
person2.name = "MinhNN";
console.log(person2.name);
//Private - không thể thay đổi / truy cập trục tiếp
//Getter - lấy giá trị của biến
console.log(person2.age); // hàm get age để lấy dữ liệu _age
//Setter: thay đổi giá trị
person2.age = 19;
console.log(person2.age);
//! Tính bao đóng (Encapsulation)
class BankAccount {
    balance;
    constructor(initBalance) {
        this.balance = initBalance;
    }
    getBalence() {
        return this.balance;
    }
    // Nạp tiền
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            console.log("Invalid deposit input");
        }
    }
    // Rút tiền
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Invalid withdraw amount");
        }
    }
}
const myAccount = new BankAccount(100000);
console.log(myAccount.getBalence());
myAccount.deposit(999);
console.log(myAccount.getBalence());
//! Tính kế thừa (Inheritance)
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    getInfo() {
        console.log(`UserName: ${this.name}`);
    }
}
//Child Class kế thừa từ lớp cha (extends)
class Admin extends User {
    permission;
    constructor(name, permission) {
        super(name);
        this.permission = permission;
    }
    getInfo() {
        console.log(`Admin Name: ${this.name}, Permission: ${this.permission}`);
    }
}
class Customer extends User {
    membership;
    constructor(name, membership) {
        super(name);
        this.membership = membership;
    }
    getInfo() {
        console.log(`Admin Name: ${this.name}, Membership: ${this.membership}`);
    }
}
//Khởi tạo đối tượng
// const admin = new Admin("Demo", "manager");
const users = [
    new Admin("Demo", "Full Access"),
    new Customer("Demo2", "Bronze"),
];
users.forEach((user) => user.getInfo());
//! Tính đa hình (Polymorphism)
// abstract class
class USER {
    username;
    constructor(username) {
        this.username = username;
    }
}
class Author1 extends USER {
    login() {
        console.log(`${this.username} đăng nhập với tài khoản tác giả`);
    }
}
class Admin1 extends USER {
    login() {
        console.log(`${this.username} đăng nhập với tài khoản admin`);
    }
}
const users1 = [new Author1("MinhNN"), new Admin1("MinhNN1")];
class Author2 {
    username;
    constructor(username) {
        this.username = username;
    }
    login() {
        console.log(`${this.username} đăng nhập tài khoản tác giả`);
    }
}
class Admin2 {
    username;
    constructor(username) {
        this.username = username;
    }
    login() {
        console.log(`${this.username} đăng nhập tài khoản admin`);
    }
}
const users2 = [new Author2("Demo"), new Admin2("Demo2")];
users2.forEach((e) => e.login());
export {};
