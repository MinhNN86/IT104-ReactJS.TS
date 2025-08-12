class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
class Manager extends Employee {
    teamSize;
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`TeamSize: ${this.teamSize}`);
    }
}
const emp = new Employee("Alice", "TechCorp", "0123456789");
emp.printInfo();
console.log("---------------");
const mgr = new Manager("Bob", "TechCorp", "0987654321", 10);
mgr.printInfo();
export {};
