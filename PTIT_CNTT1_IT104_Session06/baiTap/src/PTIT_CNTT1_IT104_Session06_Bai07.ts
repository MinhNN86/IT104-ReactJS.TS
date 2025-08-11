class Student {
  private id: number;
  private name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  get getId(): number {
    return this.id;
  }

  get getName(): string {
    return this.name;
  }

  set setName(newName: string) {
    this.name = newName;
  }
}

class Classroom {
  students: Student[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  showStudents(): void {
    console.log("Danh sách học sinh");
    this.students.forEach((s) =>
      console.log(`ID: ${s.getId}, Name: ${s.getName}`)
    );
  }

  filterStudent(id: number): Student[] {
    return this.students.filter((s) => s.getId === id);
  }

  addStudentInClass(allStudents: Student[], id: number): void {
    const index = allStudents.findIndex((s) => s.getId === id);
    if (index !== -1) {
      this.students.push(allStudents[index]!);
      allStudents.splice(index, 1);
    }
  }

  editStudent(id: number, newName: string) {
    const student = this.students.find((s) => s.getId === id);
    if (student) {
      student.setName = newName;
    }
  }

  removeStudent(id: number, allStudents: Student[]) {
    const index = this.students.findIndex((s) => s.getId === id);

    if (index !== -1) {
      const removed = this.students.splice(index, 1)[0];
      allStudents.push(removed!);
    }
  }
}

let allStudents: Student[] = [
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
