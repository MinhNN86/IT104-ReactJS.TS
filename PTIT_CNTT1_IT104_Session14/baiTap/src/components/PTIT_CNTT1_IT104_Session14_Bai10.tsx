import React, { Component, createRef } from "react";

type ToDo = {
  id: number;
  text: string;
  done: boolean;
};

type StateTypes = {
  toDos: ToDo[];
  error?: string;
  showModalDelete?: boolean;
  deleteId?: number;
  showModalEdit?: boolean;
  editId?: number;
  errorEdit?: string;
  editText?: string;
};

export default class PTIT_CNTT1_IT104_Session14_Bai10 extends Component<
  object,
  StateTypes
> {
  private taskRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);

    this.state = {
      toDos: [],
      error: undefined,
      showModalDelete: false,
      deleteId: undefined,
      showModalEdit: false,
      editId: undefined,
      errorEdit: undefined,
      editText: "",
    };
  }
  componentDidMount(): void {
    const toDoList: ToDo[] = JSON.parse(
      localStorage.getItem("toDoList") || "[]"
    );
    this.setState({
      toDos: toDoList,
    });
  }

  render() {
    const addToDo = () => {
      const inputToDo = (this.taskRef.current?.value || "").trim();
      if (!inputToDo) {
        this.setState({
          error: "Tên công việc không được để trống",
        });
        return;
      }

      const checkToDo = this.state.toDos.some(
        (task) =>
          task.text.trim().toLowerCase() === inputToDo.trim().toLowerCase()
      );
      if (checkToDo) {
        this.setState({
          error: "Tên công việc không được trùng",
        });
        return;
      }

      let newId: number;
      if (this.state.toDos.length === 0) {
        newId = 1;
      } else {
        newId = this.state.toDos[this.state.toDos.length - 1].id + 1;
      }

      const newToDo: ToDo = { id: newId, text: inputToDo, done: false };
      const newListToDo: ToDo[] = [newToDo, ...this.state.toDos];

      localStorage.setItem("toDoList", JSON.stringify(newListToDo));
      this.setState({
        toDos: newListToDo,
        error: undefined,
      });

      if (this.taskRef.current) {
        this.taskRef.current.value = "";
      }
    };

    const openDeleteModal = (id: number): void => {
      this.setState({ showModalDelete: true, deleteId: id });
    };

    const closeModal = () => {
      this.setState({
        showModalDelete: false,
        deleteId: undefined,
        showModalEdit: false,
        editId: undefined,
      });
    };

    const confirmDelete = () => {
      const { deleteId, toDos } = this.state;
      if (deleteId === undefined) return;
      const newList = toDos.filter((task) => task.id !== deleteId);
      localStorage.setItem("toDoList", JSON.stringify(newList));
      this.setState({
        toDos: newList,
        showModalDelete: false,
        deleteId: undefined,
      });
    };

    const openEditModal = (id: number) => {
      const task = this.state.toDos.find((t) => t.id === id);
      this.setState({
        showModalEdit: true,
        editId: id,
        editText: task?.text || "",
      });
    };

    const confirmUpdate = () => {
      const { editId, toDos, editText } = this.state;
      if (editId === undefined) return;
      const inputUpdate = (editText || "").trim();
      if (inputUpdate === "") {
        this.setState({
          errorEdit: "Tên công việc không được để trống",
        });
        return;
      }
      const checkName = toDos.some(
        (task) => task.text === inputUpdate && task.id !== editId
      );
      if (checkName) {
        this.setState({
          errorEdit: "Tên công việc không được trùng",
        });
        return;
      }
      const newToDos = toDos.map((task) =>
        task.id === editId ? { ...task, text: inputUpdate } : task
      );
      localStorage.setItem("toDoList", JSON.stringify(newToDos));
      this.setState({
        toDos: newToDos,
        showModalEdit: false,
        editId: undefined,
        editText: "",
        errorEdit: undefined,
      });
    };

    return (
      <div className="container my-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="text-center mb-3">Danh sách công việc</h3>

            <div className="input-group mb-3">
              <input
                className="form-control"
                placeholder="Nhập tên công việc"
                ref={this.taskRef}
              />
              <button className="btn btn-primary" onClick={addToDo}>
                Thêm
              </button>
            </div>
            <div>
              {this.state.error && (
                <div className="text-danger small mb-3">{this.state.error}</div>
              )}
            </div>

            <ul className="list-unstyled mb-3">
              {this.state.toDos.map((task) => (
                <li
                  className="d-flex align-items-center justify-content-between py-2"
                  key={task.id}
                >
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={task.done}
                      onChange={() => {
                        const newToDos = this.state.toDos.map((t) =>
                          t.id === task.id ? { ...t, done: !t.done } : t
                        );
                        localStorage.setItem(
                          "toDoList",
                          JSON.stringify(newToDos)
                        );
                        this.setState({ toDos: newToDos });
                      }}
                    />
                    <span
                      style={{
                        textDecoration: task.done ? "line-through" : "none",
                        color: task.done ? "#888" : undefined,
                      }}
                    >
                      {task.text}
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => openEditModal(task.id)}
                    >
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

            {(() => {
              const doneCount = this.state.toDos.filter((t) => t.done).length;
              const total = this.state.toDos.length;
              if (total > 0 && doneCount === total) {
                return (
                  <div className="alert alert-success mb-0">
                    Hoàn thành công việc
                  </div>
                );
              }
              return (
                <div className="alert alert-light mb-0">
                  Công việc đã hoàn thành:{" "}
                  <strong>
                    {doneCount} / {total}
                  </strong>
                </div>
              );
            })()}
          </div>
        </div>

        {this.state.showModalDelete && (
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
                    {
                      this.state.toDos.find(
                        (task) => task.id === this.state.deleteId
                      )?.text
                    }
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

        {this.state.showModalEdit && (
          <div
            className="modal show d-block"
            tabIndex={-1}
            style={{ background: "rgba(0,0,0,0.3)" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Header */}
                <div className="modal-header">
                  <h5 className="modal-title">Cập nhật công việc</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  />
                </div>

                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Tên công việc</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.editText}
                      onChange={(e) =>
                        this.setState({ editText: e.target.value })
                      }
                    />
                    <div>
                      {this.state.errorEdit && (
                        <div className="text-danger small mb-3">
                          {this.state.errorEdit}
                        </div>
                      )}
                    </div>
                  </div>
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
                    onClick={confirmUpdate}
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
}
