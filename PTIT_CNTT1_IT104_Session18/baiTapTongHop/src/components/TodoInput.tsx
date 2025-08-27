import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import type { Task } from "../interfaces/task.interface";

export default function TodoInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isShowError, setIsShowError] = useState<boolean>(false);

  // Sử dụng context thay vì useReducer cục bộ
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error("TodoInput must be used within a TaskContextProvider");
  }

  const { handleAddTask } = taskContext;

  // Hàm lấy giá trị trong input
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value) {
      // Cập nhật state để hiển thị lỗi
      setIsShowError(true);
    } else {
      // Cập nhật state để ẩn lỗi
      setIsShowError(false);
    }

    setInputValue(value);
  };

  // Hàm submit form
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue) {
      const newTask: Task = {
        id: Math.ceil(Math.random() * 100000000),
        name: inputValue,
        isCompleted: false,
      };

      handleAddTask(newTask);

      setInputValue("");
      setIsShowError(false);
    } else {
      setIsShowError(true);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmitForm} className="d-flex mb-1">
        <input
          onChange={handleChangeInput}
          value={inputValue}
          type="text"
          className="form-control me-2"
          placeholder="Nhập công việc..."
        />
        <button type="submit" className="btn btn-primary">
          Thêm
        </button>
      </form>
      {isShowError && (
        <p className="text-danger error-text mb-3 text-sm fs-6">
          Vui lòng nhập tên công việc!
        </p>
      )}
    </>
  );
}
