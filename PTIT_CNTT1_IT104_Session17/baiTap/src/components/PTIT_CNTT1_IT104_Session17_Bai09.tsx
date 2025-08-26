import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
type Task = {
  id: number;
  text: string;
  done: boolean;
};
export default function PTIT_CNTT1_IT104_Session17_Bai09() {
  const taskRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    const taskData: Task[] = JSON.parse(
      localStorage.getItem("tasksData") || "[]"
    );
    setTasks(taskData);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasksData", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const inputTask = (taskRef.current?.value || "").trim();
    if (!inputTask) {
      setError("Tên công việc không được để trống");
      return;
    }

    const checkTask = tasks.some(
      (task) =>
        task.text.trim().toLowerCase() === inputTask.trim().toLowerCase()
    );
    if (checkTask) {
      setError("Tên công việc không được trùng");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      text: inputTask,
      done: false,
    };
    setTasks([newTask, ...tasks]);
    setError(undefined);
    if (taskRef.current) taskRef.current.value = "";
  };

  const toggleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const openDeleteModal = (id: number) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  const confirmDelete = () => {
    if (deleteId !== null) {
      setTasks(tasks.filter((task) => task.id !== deleteId));
    }
    closeModal();
  };

  const completedCount = tasks.filter((task) => task.done).length;
  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="text-center mb-3">Danh sách công việc</h3>

          <div className="input-group mb-3">
            <input
              className="form-control"
              placeholder="Nhập tên công việc"
              ref={taskRef}
            />
            <button className="btn btn-primary" onClick={addTask}>
              Thêm
            </button>
          </div>
          <div>
            {error && <div className="text-danger small mb-3">{error}</div>}
          </div>

          <ul className="list-unstyled mb-3">
            {tasks.map((task) => (
              <li
                className="d-flex align-items-center justify-content-between py-2"
                key={task.id}
              >
                <div className="d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleDone(task.id)}
                  />
                  <span
                    style={{
                      textDecoration: task.done ? "line-through" : "none",
                    }}
                  >
                    {task.text}
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-sm btn-warning" disabled>
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => openDeleteModal(task.id)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="alert alert-light mb-0">
            Công việc đã hoàn thành:{" "}
            <strong>
              {completedCount} / {tasks.length}
            </strong>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal show d-block"
          tabIndex={-1}
          style={{ background: "rgba(0,0,0,0.3)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Xác nhận</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                />
              </div>
              <div className="modal-body d-flex align-items-center gap-2">
                <i className="bi bi-exclamation-triangle-fill text-danger fs-4"></i>
                <span>
                  Bạn có xác nhận xóa công việc
                  {" < "}
                  {tasks.find((task) => task.id === deleteId)?.text}
                  {" > "}
                  không?
                </span>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Hủy
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={confirmDelete}
                >
                  Đồng ý
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
