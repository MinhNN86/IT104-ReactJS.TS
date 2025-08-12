class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    id;
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`
ID: ${this.id}
Name: ${this.name}
        `);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
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
export {};
