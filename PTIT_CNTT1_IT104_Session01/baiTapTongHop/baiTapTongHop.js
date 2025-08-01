import { Student, studentList } from "./student.js";
import {
  getStudentById,
  getTopStudents,
  getClassAverage,
  getStudentByScoreRange,
  sortStudentsByName,
} from "./help-funtion.js";

console.log(getStudentById(studentList, 1));
console.log(getTopStudents(studentList));
console.log(getClassAverage(studentList));
console.log(getStudentByScoreRange(studentList, 5, 8));
console.log(sortStudentsByName(studentList));
h;
