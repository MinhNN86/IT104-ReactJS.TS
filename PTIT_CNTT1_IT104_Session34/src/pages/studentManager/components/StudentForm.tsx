import { Button, MenuItem, Select, TextField } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import React, { useState, useEffect } from "react";
import type { Student } from "../../../interfaces/student.interface";
import { useAppDisPath, useAppSelector } from "../../../hooks/useCustomRedux";
import { addStudent, updateStudent } from "../../../slices/studentSlices";

export default function StudentForm() {
  const students: Student[] = useAppSelector((state) => state.student);
  const studentEdit = useAppSelector((state) => state.studentEdit);
  console.log(studentEdit);

  const dispatch = useAppDisPath();

  const [form, setForm] = React.useState<Student>({
    id: "",
    name: "",
    age: 0,
    gender: "Nam",
    birthday: "",
    hometown: "",
    address: "",
  });

  // Effect để fill form khi edit
  useEffect(() => {
    if (studentEdit.isEdit && studentEdit.studentInfo) {
      setForm({
        id: studentEdit.studentInfo.id || "",
        name: studentEdit.studentInfo.name || "",
        age: studentEdit.studentInfo.age || 0,
        gender: studentEdit.studentInfo.gender || "Nam",
        birthday: studentEdit.studentInfo.birthday || "",
        hometown: studentEdit.studentInfo.hometown || "",
        address: studentEdit.studentInfo.address || "",
      });
    } else {
      setForm({
        id: "",
        name: "",
        age: 0,
        gender: "Nam",
        birthday: "",
        hometown: "",
        address: "",
      });
    }
  }, [studentEdit.isEdit, studentEdit.studentInfo]);

  //Error
  const [isIdError, setIsIdError] = useState<string>("");
  const [isNameError, setIsNameError] = useState<boolean>(false);
  const [isAgeError, setIsAgeError] = useState<boolean>(false);
  const [isDobError, setIsDobError] = useState<string>("");
  const [isHomeTownError, setIsHomeTownError] = useState<boolean>(false);
  const [isAddressError, setIsAddressError] = useState<boolean>(false);

  // Xử lý cho TextField
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "age") {
      setForm({ ...form, [name]: value === "" ? 0 : Number(value) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Xử lý cho Select
  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setForm({ ...form, [name as string]: value });
  };

  const handleSubmit = () => {
    let hasError = false;

    //ID
    if (!studentEdit.isEdit) {
      if (form.id === "") {
        setIsIdError("Mã sinh viên không được để trống");
        hasError = true;
      } else if (students.some((s) => s.id === form.id)) {
        setIsIdError("Mã sinh viên không đuọc phép trùng");
        hasError = true;
      } else {
        setIsIdError("");
      }
    } else {
      setIsIdError("");
    }
    //Name
    if (form.name === "") {
      setIsNameError(true);
      hasError = true;
    } else {
      setIsNameError(false);
    }
    //Age
    if (form.age <= 0) {
      setIsAgeError(true);
      hasError = true;
    } else {
      setIsAgeError(false);
    }
    //Dob
    if (form.birthday === "") {
      setIsDobError("Ngày sinh không được để trống");
      hasError = true;
    } else {
      const dobDate = new Date(form.birthday || "");
      const now = new Date();
      dobDate.setHours(0, 0, 0, 0);
      now.setHours(0, 0, 0, 0);
      if (dobDate > now) {
        setIsDobError("Ngày sinh không hợp lệ");
        hasError = true;
      } else {
        setIsDobError("");
      }
    }
    //Hometown
    if (form.hometown === "") {
      setIsHomeTownError(true);
      hasError = true;
    } else {
      setIsHomeTownError(false);
    }
    //Address
    if (form.address === "") {
      setIsAddressError(true);
      hasError = true;
    } else {
      setIsAddressError(false);
    }
    if (hasError) return;

    const studentData: Student = {
      id: form.id,
      name: form.name,
      age: form.age,
      gender: form.gender,
      birthday: form.birthday,
      hometown: form.hometown,
      address: form.address,
    };

    if (studentEdit.isEdit) {
      // Update existing student
      dispatch(updateStudent(studentData));
    } else {
      // Add new student
      dispatch(addStudent(studentData));
    }

    setForm({
      id: "",
      name: "",
      age: 0,
      gender: "Nam",
      birthday: "",
      hometown: "",
      address: "",
    });
  };

  return (
    <div className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">Thông Tin Sinh Viên</h2>
      <div className="flex flex-col gap-4">
        <TextField
          error={!!isIdError}
          label={isIdError ? isIdError : "Mã sinh viên"}
          name="id"
          value={form.id || ""}
          onChange={handleInputChange}
          fullWidth
          disabled={studentEdit.isEdit}
        />
        <TextField
          error={isNameError}
          label={
            isNameError ? "Tên sinh viên không được để trống" : "Tên sinh viên"
          }
          name="name"
          value={form.name || ""}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          error={isAgeError}
          label={isAgeError ? "Tuổi phải lớn hơn 0" : "Tuổi"}
          name="age"
          type="number"
          value={form.age || 0}
          onChange={handleInputChange}
          fullWidth
        />
        <Select
          name="gender"
          value={form.gender || "Nam"}
          onChange={handleSelectChange}
          fullWidth
        >
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nữ">Nữ</MenuItem>
        </Select>
        <TextField
          error={!!isDobError}
          label={isDobError ? isDobError : "Ngày sinh"}
          type="date"
          name="birthday"
          value={form.birthday || ""}
          onChange={handleInputChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          error={isHomeTownError}
          label={isHomeTownError ? "Nơi sinh không được để trống" : "Nơi sinh"}
          name="hometown"
          value={form.hometown || ""}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          error={isAddressError}
          label={isAddressError ? "Địa chỉ không được để trống" : "Địa chỉ"}
          name="address"
          value={form.address || ""}
          onChange={handleInputChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {studentEdit.isEdit ? "Update" : "Submit"}
        </Button>
      </div>
    </div>
  );
}
