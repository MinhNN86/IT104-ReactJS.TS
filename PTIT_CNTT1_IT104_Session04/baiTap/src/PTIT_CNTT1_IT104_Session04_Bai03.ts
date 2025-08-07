interface Student {
  name: string;
  age: number;
  email: string;
}

let student1: Student = {
  name: "MinhNN",
  age: 19,
  email: "MinhNN@gmail.com",
};

const displayStudent = (student: Student): void => {
  console.log(
    `Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}`
  );
};

displayStudent(student1);
