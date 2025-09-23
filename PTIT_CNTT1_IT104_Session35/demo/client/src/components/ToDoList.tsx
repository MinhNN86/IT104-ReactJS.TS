import { useEffect, useState } from "react";
import { useAppDisPath, useAppSelector } from "../hooks/useCustomeRedux";
import "../styles/ToDoList.css";
import { createTask, deleteTask, getAllTask } from "../apis/task.api";
import type { Task } from "../slices/taskSlice";

export default function ToDoList() {
  const [inputValue, setInputValue] = useState<string>("");
  // Lấy dữ liệu từ store
  const { data: tasks, error, status } = useAppSelector((state) => state.task);
  const dispatch = useAppDisPath();

  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);

  if (status === "pending") {
    return <div className="loader"></div>;
  }
  if (error) {
    alert("Đã có lỗi xảy ra, vui lòng thử lại");
    return <></>;
  }
  //   console.log("data - error - status: ", tasks, error, status);

  // Hàm thêm công việc
  const handleSubmit = (event: React.FormEvent) => {
    //Ngăn chặn sự kiện load lại trang
    event.preventDefault();
    const newTask: Task = {
      name: inputValue,
      status: "inactive" as const,
    };
    // Gửi thông tin vào API và store
    dispatch(createTask(newTask));
    setInputValue("");
  };

  //Hàm xoá công việc theo id
  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">To-Do List</h1>

        <form className="row" onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nhập công việc..."
            className="input"
          />
          <button type="submit" className="btn btn-green">
            Thêm công việc
          </button>
        </form>

        <ul className="list">
          {tasks.map((task) => (
            <li className="item" key={task.id}>
              <label className="left">
                <input checked={task.status === "active"} type="checkbox" />
                <span className="text">{task.name}</span>
              </label>
              <div className="actions">
                <button className="btn btn-orange">Sửa</button>
                <button
                  onClick={() => {
                    if (task.id) {
                      handleDelete(task.id);
                    }
                  }}
                  className="btn btn-red"
                >
                  Xóa
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
