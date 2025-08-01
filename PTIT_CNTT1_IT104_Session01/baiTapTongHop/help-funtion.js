import { Student, studentList } from "./student.js";

function getStudentById(studentList, id) {
  return studentList.find((e) => e.id === id);
}

function getTopStudents(studentList) {
  let MaxAvg = Math.max(...studentList.map((e) => e.getAverage()));
  return studentList.filter((e) => e.getAverage() == MaxAvg);
}

function getClassAverage(studentList) {
  let total = studentList.reduce((sum, s) => sum + s.getAverage(), 0);
  return total / studentList.length;
}

function getStudentByScoreRange(studentList, min, max) {
  return studentList.filter((e) => {
    let avg = e.getAverage();
    return avg >= min && avg <= max;
  });
}

function sortStudentsByName(studentList) {
  return [...studentList].sort((a, b) => a.name.localeCompare(b.name));
}

export {
  getStudentById,
  getTopStudents,
  getClassAverage,
  getStudentByScoreRange,
  sortStudentsByName,
};
