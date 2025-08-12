class Employee {
  name: string;
  protected company: string;
  private phone: string;
  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  printInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Company: ${this.company}`);
    console.log(`Phone: ${this.phone}`);
  }
}

class Manager extends Employee {
  teamSize: number;
  constructor(name: string, company: string, phone: string, teamSize: number) {
    super(name, company, phone);
    this.teamSize = teamSize;
  }

  printInfo(): void {
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
