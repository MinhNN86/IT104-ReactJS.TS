class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
const students = [
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
export {};
