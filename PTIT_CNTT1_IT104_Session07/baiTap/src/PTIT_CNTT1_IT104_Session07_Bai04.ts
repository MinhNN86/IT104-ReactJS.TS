abstract class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract displayInfo(): void;
}

class Student extends Person {
  id: number;
  constructor(name: string, id: number) {
    super(name);
    this.id = id;
  }
  displayInfo(): void {
    console.log(`
ID: ${this.id}
Name: ${this.name}
        `);
  }
}

class Teacher extends Person {
  subject: string;
  constructor(name: string, subject: string) {
    super(name);
    this.subject = subject;
  }
  displayInfo(): void {
    console.log(`
Name: ${this.name}
Subject: ${this.subject}
        `);
  }
}

const student = new Student("Nguyễn Văn A", 101);
const teacher = new Teacher("Trần Thị B", "Toán");

student.displayInfo();
teacher.displayInfo();
