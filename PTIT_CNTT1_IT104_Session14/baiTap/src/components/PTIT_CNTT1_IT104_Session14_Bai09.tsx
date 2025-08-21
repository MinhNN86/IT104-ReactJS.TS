import React, { Component, createRef } from "react";

type ToDo = {
  id: number;
  text: string;
  done: boolean;
};

type StateTypes = {
  toDos: ToDo[];
  error?: string;
  showModal?: boolean;
  deleteId?: number;
};

export default class PTIT_CNTT1_IT104_Session14_Bai09 extends Component<
  object,
  StateTypes
> {
  private taskRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);

    this.state = {
      toDos: [],
      error: undefined,
      showModal: false,
      deleteId: undefined,
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
      this.setState({ showModal: true, deleteId: id });
    };

    const closeModal = () => {
      this.setState({ showModal: false, deleteId: undefined });
    };

    const confirmDelete = () => {
      const { deleteId, toDos } = this.state;
      if (deleteId === undefined) return;
      const newList = toDos.filter((task) => task.id !== deleteId);
      localStorage.setItem("toDoList", JSON.stringify(newList));
      this.setState({ toDos: newList, showModal: false, deleteId: undefined });
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
                    />
                    <span>{task.text}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-sm btn-warning">
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
              <strong>0 / {this.state.toDos.length}</strong>
            </div>
          </div>
        </div>

        {this.state.showModal && (
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
      </div>
    );
  }
}
