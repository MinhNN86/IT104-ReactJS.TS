import React, { Component, createRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

type Task = {
  id: number;
  name: string;
  done: boolean;
};

type StateType = {
  tasks: Task[];
  countId: number;
  showModalDelete?: boolean;
  deleteId?: number;
  editId?: number;
};
export default class PTIT_CNTT1_IT104_Session15_Bai09 extends Component<
  object,
  StateType
> {
  private taskRef = createRef<HTMLInputElement>();
  constructor(props: object) {
    super(props);

    this.state = {
      tasks: [],
      countId: 0,
      showModalDelete: false,
      deleteId: undefined,
      editId: undefined,
    };
  }

  componentDidMount(): void {
    const taskList: Task[] = JSON.parse(
      localStorage.getItem("taskList") || "[]"
    );
    this.setState({
      tasks: taskList,
      countId: taskList.length === 0 ? 1 : taskList.length + 1,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputTask = this.taskRef.current?.value || "";
    if (!inputTask) {
      alert("Tên công việc không được để trống");
      return;
    }

    // Nếu đang sửa
    if (this.state.editId !== undefined) {
      // Kiểm tra trùng tên với task khác
      const checkTask = this.state.tasks.some(
        (task) =>
          task.name.trim().toLowerCase() === inputTask.trim().toLowerCase() &&
          task.id !== this.state.editId
      );
      if (checkTask) {
        alert("Tên công việc không được phép trùng");
        return;
      }
      const newListTask = this.state.tasks.map((task) =>
        task.id === this.state.editId ? { ...task, name: inputTask } : task
      );
      localStorage.setItem("taskList", JSON.stringify(newListTask));
      this.setState({
        tasks: newListTask,
        editId: undefined,
      });
      if (this.taskRef.current) {
        this.taskRef.current.value = "";
      }
      return;
    }

    // Thêm mới
    const checkTask = this.state.tasks.some(
      (task) =>
        task.name.trim().toLowerCase() === inputTask.trim().toLowerCase()
    );
    if (checkTask) {
      alert("Tên công việc không được phép trùng");
      return;
    }

    const newId = this.state.countId;
    const newTask: Task = { id: newId, name: inputTask, done: false };
    const newListTask: Task[] = [newTask, ...this.state.tasks];

    localStorage.setItem("taskList", JSON.stringify(newListTask));
    this.setState({
      tasks: newListTask,
      countId: this.state.countId + 1,
    });

    if (this.taskRef.current) {
      this.taskRef.current.value = "";
    }
  };

  render() {
    const openModalDelete = (id: number) => {
      this.setState({
        showModalDelete: true,
        deleteId: id,
      });
    };

    const closeModal = () => {
      this.setState({
        showModalDelete: false,
        deleteId: undefined,
      });
    };

    const confirmDelete = () => {
      const { deleteId, tasks } = this.state;
      if (deleteId === undefined) return;
      const newList = tasks.filter((task) => task.id !== deleteId);
      localStorage.setItem("taskList", JSON.stringify(newList));
      this.setState({
        tasks: newList,
        showModalDelete: false,
        deleteId: undefined,
      });
    };

    return (
      <div className="container py-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="fw-bold mb-3">Danh sách công việc</h2>

            {/* Form thêm/sửa */}
            <form className="d-flex gap-2 mb-3" onSubmit={this.handleSubmit}>
              <input
                className="form-control"
                placeholder="Thêm công việc mới..."
                ref={this.taskRef}
              />
              <button type="submit" className="btn btn-primary">
                <i
                  className={`bi ${
                    this.state.editId !== undefined
                      ? "bi-check-lg"
                      : "bi-plus-lg"
                  } me-1`}
                />
                {this.state.editId !== undefined ? "Cập nhật" : "Thêm"}
              </button>
            </form>

            <ul className="list-group list-group-flush">
              {this.state.tasks.map((task) => (
                <li
                  className="list-group-item d-flex align-items-center bg-light border-0 mb-2 rounded-3"
                  key={task.id}
                >
                  <div
                    className="form-check ms-1 me-3 d-flex align-items-center"
                    style={{ height: "100%" }}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={task.done}
                      onChange={() => {
                        const updateTask = this.state.tasks.map((t) =>
                          t.id === task.id ? { ...t, done: !t.done } : t
                        );
                        localStorage.setItem(
                          "taskList",
                          JSON.stringify(updateTask)
                        );
                        this.setState({ tasks: updateTask });
                      }}
                    />
                  </div>
                  <div
                    className="flex-grow-1 d-flex align-items-center"
                    style={{ height: "100%" }}
                  >
                    <span
                      style={{
                        textDecoration: task.done ? "line-through" : "none",
                      }}
                    >
                      {task.name}
                    </span>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-outline-warning"
                      onClick={() => {
                        this.setState({ editId: task.id }, () => {
                          if (this.taskRef.current) {
                            this.taskRef.current.value = task.name;
                            this.taskRef.current.focus();
                          }
                        });
                      }}
                    >
                      Sửa
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => openModalDelete(task.id)}
                    >
                      Xóa
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {this.state.showModalDelete && (
          <div
            className="modal show d-block"
            id="confirmDeleteModal"
            tabIndex={-1}
            style={{ background: "rgba(0,0,0,0.3)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-0 shadow">
                <style>{`
                .modal-content{ border-radius: 14px; }
                .modal-header .btn-close { box-shadow: none; }
              `}</style>

                <div className="modal-header">
                  <h5 className="modal-title fw-bold">Xác nhận</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Đóng"
                    onClick={closeModal}
                  />
                </div>

                <div className="modal-body">
                  <div className="d-flex align-items-start gap-3">
                    <div className="text-danger fs-3">
                      <i className="bi bi-exclamation-octagon-fill"></i>
                    </div>
                    <p className="mb-0">
                      Bạn có xác nhận xóa công việc này không?
                    </p>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light border"
                    onClick={closeModal}
                  >
                    Hủy
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={confirmDelete}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
