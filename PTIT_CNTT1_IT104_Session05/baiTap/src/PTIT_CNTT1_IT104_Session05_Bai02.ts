class Student {
  id: number;
  age: number;
  email: string;
  constructor(id: number, age: number, email: string) {
    this.id = id;
    this.age = age;
    this.email = email;
  }
}

const students: Student[] = [
  new Student(1, 18, "MinhNN@gmail.com"),
  new Student(2, 19, "BangNN@gmail.com"),
];

students.forEach((e) => {
  console.log(`
id: ${e.id}
age: ${e.age}
email: ${e.email}
        `);
});
