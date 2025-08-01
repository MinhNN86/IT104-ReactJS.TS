class Student {
  constructor(id, name, age, scores) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.scores = scores;
  }
  getAverage() {
    const sum = this.scores.reduce((a, b) => a + b, 0);
    return sum / this.scores.length;
  }
}

const studentList = [
  new Student(1, "Binh", 21, [6, 5, 7]),
  new Student(2, "Chi", 20, [9, 9, 10]),
  new Student(3, "Dung", 22, [5, 6, 4]),
  new Student(4, "Em", 19, [7, 8, 7]),
  new Student(5, "An", 20, [8, 9, 10]),
];

export { studentList, Student };
