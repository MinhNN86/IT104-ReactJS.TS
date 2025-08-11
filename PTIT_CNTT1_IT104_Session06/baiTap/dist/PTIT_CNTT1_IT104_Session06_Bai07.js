class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    get getId() {
        return this.id;
    }
    get getName() {
        return this.name;
    }
    set setName(newName) {
        this.name = newName;
    }
}
class Classroom {
    students = [];
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        console.log("Danh sách học sinh");
        this.students.forEach((s) => console.log(`ID: ${s.getId}, Name: ${s.getName}`));
    }
    filterStudent(id) {
        return this.students.filter((s) => s.getId === id);
    }
    addStudentInClass(allStudents, id) {
        const index = allStudents.findIndex((s) => s.getId === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
    editStudent(id, newName) {
        const student = this.students.find((s) => s.getId === id);
        if (student) {
            student.setName = newName;
        }
    }
    removeStudent(id, allStudents) {
        const index = this.students.findIndex((s) => s.getId === id);
        if (index !== -1) {
            const removed = this.students.splice(index, 1)[0];
            allStudents.push(removed);
        }
    }
}
let allStudents = [
    new Student(1, "An"),
    new Student(2, "Bình"),
    new Student(3, "Cường"),
    new Student(4, "Dũng"),
    new Student(5, "Hà"),
    new Student(6, "Linh"),
];
let classA = new Classroom();
let classB = new Classroom();
classA.addStudentInClass(allStudents, 1);
classA.addStudentInClass(allStudents, 2);
classA.addStudentInClass(allStudents, 3);
classB.addStudentInClass(allStudents, 4);
classB.addStudentInClass(allStudents, 5);
classB.addStudentInClass(allStudents, 6);
console.log("Lớp A:");
classA.showStudents();
console.log("\nLớp B:");
classB.showStudents();
classA.removeStudent(2, allStudents);
classA.editStudent(1, "Ngọc");
console.log("\nLớp A sau khi xóa và sửa");
classA.showStudents();
console.log("\nDanh sách học sinh còn lại");
allStudents.forEach((s) => console.log(`ID: ${s.getId}, Name: ${s.getName}`));
export {};
