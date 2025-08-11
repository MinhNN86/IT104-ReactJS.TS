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

console.log("\nDanh sách học sinh còn lại:");
console.log(allStudents);
