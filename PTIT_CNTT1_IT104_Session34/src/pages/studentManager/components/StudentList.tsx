import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import type { Student } from "../../../interfaces/student.interface";
import { useAppDisPath, useAppSelector } from "../../../hooks/useCustomRedux";
import ModalDelete from "./ModalDelete";
import { useState } from "react";
import { editStudent } from "../../../slices/studentEditSlices";

export default function StudentList() {
  const filterStudent: string = useAppSelector((state) => state.studentSearch);
  const students: Student[] = useAppSelector((state) => state.student);
  const dispatch = useAppDisPath();

  const filteredStudents = students.filter((student) => {
    if (!filterStudent || filterStudent.trim() === "") {
      return true;
    }

    const searchTerm = filterStudent.toLowerCase().trim();
    return student.name.toLowerCase().includes(searchTerm);
  });

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState<boolean>(false);
  const [infoStudentDelete, setInfoStudentDelete] = useState<Student | null>(
    null
  );

  const handleEdit = (student: Student) => {
    dispatch(editStudent(student));
  };

  const handleOpenModalDelete = (student: Student) => {
    setInfoStudentDelete(student);
    setIsModalDeleteOpen(true);
  };
  const handleCloseModalDelete = () => {
    setInfoStudentDelete(null);
    setIsModalDeleteOpen(false);
  };
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Mã sinh viên</TableCell>
              <TableCell>Tên sinh viên</TableCell>
              <TableCell>Tuổi</TableCell>
              <TableCell>Giới tính</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.map((s, i) => (
              <TableRow key={s.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{s.id}</TableCell>
                <TableCell>{s.name}</TableCell>
                <TableCell>{s.age}</TableCell>
                <TableCell>{s.gender}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="contained" color="error">
                      Xem
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => handleEdit(s)}
                    >
                      Sửa
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleOpenModalDelete(s)}
                    >
                      Xóa
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ModalDelete
        open={isModalDeleteOpen}
        onClose={handleCloseModalDelete}
        studentDelete={infoStudentDelete}
      />
    </>
  );
}
