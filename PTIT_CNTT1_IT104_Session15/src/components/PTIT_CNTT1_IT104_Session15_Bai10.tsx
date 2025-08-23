import React, { cloneElement, Component, createRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

type Student = {
  id: number;
  code: string;
  name: string;
  dob: string;
  email: string;
  status: boolean;
};

type StateTypes = {
  openModalAdd?: boolean;
  students: Student[];
  countId: number;
  openModal?: boolean;
  blockId?: number;
  removeId?: number;
};

export default class PTIT_CNTT1_IT104_Session15_Bai10 extends Component<
  object,
  StateTypes
> {
  private codeRef = createRef<HTMLInputElement>();
  private nameRef = createRef<HTMLInputElement>();
  private dobRef = createRef<HTMLInputElement>();
  private emailRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);

    this.state = {
      openModalAdd: false,
      students: [],
      countId: 0,
      openModal: false,
      blockId: undefined,
      removeId: undefined,
    };
  }
  componentDidMount(): void {
    const studentData: Student[] = JSON.parse(
      localStorage.getItem("studentData") || "[]"
    );
    this.setState({
      students: studentData,
      countId: studentData.length === 0 ? 1 : studentData.length + 1,
    });
  }

  openModalAdd = () => {
    this.setState({ openModalAdd: true });
  };

  closeModal = () => {
    this.setState({
      openModalAdd: false,
      openModal: false,
      blockId: undefined,
      removeId: undefined,
    });
  };

  handleSubmit = () => {
    const inputCode = this.codeRef.current?.value;
    const inputName = this.nameRef.current?.value;
    const inputDob = this.dobRef.current?.value;
    const inputEmail = this.emailRef.current?.value;

    if (!inputCode || !inputName || !inputDob || !inputEmail) {
      alert("Vui lòng điền đủ thông tin");
      return;
    }

    const checkCode = this.state.students.some(
      (student) =>
        student.code.trim().toLowerCase() === inputCode.trim().toLowerCase()
    );
    if (checkCode) {
      alert("Mã sinh viên không được phép trùng");
      return;
    }

    const checkEmail = this.state.students.some(
      (student) =>
        student.email.trim().toLowerCase() === inputEmail.trim().toLowerCase()
    );
    if (checkEmail) {
      alert("Email không được phép trùng");
      return;
    }

    const newId: number = this.state.countId;
    const newStudent: Student = {
      id: newId,
      code: inputCode,
      name: inputName,
      dob: inputDob,
      email: inputEmail,
      status: true,
    };

    const newListStudent: Student[] = [...this.state.students, newStudent];

    localStorage.setItem("studentData", JSON.stringify(newListStudent));
    this.setState({
      students: newListStudent,
      countId: this.state.countId + 1,
    });

    if (this.codeRef.current) {
      this.codeRef.current.value = "";
    }
    if (this.nameRef.current) {
      this.nameRef.current.value = "";
    }
    if (this.dobRef.current) {
      this.dobRef.current.value = "";
    }
    if (this.emailRef.current) {
      this.emailRef.current.value = "";
    }

    this.closeModal();
  };

  handleBlock(id: number) {
    this.setState({
      openModal: true,
      blockId: id,
    });
  }

  handleDelete(id: number) {
    this.setState({
      openModal: true,
      removeId: id,
    });
  }

  confirmDelete = () => {
    const { removeId, students } = this.state;
    if (removeId === undefined) return;
    const updateStudent = students.filter((student) => student.id !== removeId);
    this.setState({
      students: updateStudent,
      openModal: false,
      removeId: undefined,
    });
  };

  confirmBlock = () => {
    const { blockId, students } = this.state;
    if (blockId === undefined) return;
    const updateStudent = students.map((s) =>
      s.id === blockId ? { ...s, status: !s.status } : s
    );
    localStorage.setItem("studentData", JSON.stringify(updateStudent));
    this.setState({
      students: updateStudent,
      openModal: false,
      removeId: undefined,
    });
  };

  renderHeader() {
    return (
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="page-title m-0">Quản lý sinh viên</h2>
        <button className="btn btn-primary btn-lg" onClick={this.openModalAdd}>
          <i className="bi bi-plus-lg me-1"></i> Thêm mới sinh viên
        </button>
      </div>
    );
  }

  renderToolbar() {
    return (
      <div className="toolbar d-flex gap-3 mb-3 justify-content-end">
        <select className="form-select">
          <option>Sắp xếp theo tuổi</option>
          <option>Tuổi tăng dần</option>
          <option>Tuổi giảm dần</option>
          <option>Tên A → Z</option>
          <option>Tên Z → A</option>
        </select>
        <div className="input-group">
          <span className="input-group-text bg-white">
            <i className="bi bi-search" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Tìm kiếm từ khóa theo tên hoặc email"
          />
        </div>
      </div>
    );
  }

  renderTable() {
    return (
      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>STT</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Trạng thái</th>
              <th className="text-center">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student, idx) => (
              <tr key={student.code}>
                <td>{idx + 1}</td>
                <td>{student.code}</td>
                <td>{student.name}</td>
                <td>{new Date(student.dob).toLocaleDateString("vi-VN")}</td>
                <td>{student.email}</td>
                <td>
                  <span
                    className={`badge-soft ${
                      student.status ? "success" : "danger"
                    }`}
                  >
                    {student.status ? "Đang hoạt động" : "Ngừng hoạt động"}
                  </span>
                </td>
                <td className="text-center">
                  <div className="d-inline-flex gap-2">
                    <button
                      className="btn btn-outline-primary btn-sm btn-chip"
                      onClick={() => this.handleBlock(student.id)}
                    >
                      Chặn
                    </button>
                    <button className="btn btn-outline-warning btn-sm btn-chip">
                      Sửa
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm btn-chip"
                      onClick={() => this.handleDelete(student.id)}
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  renderModalAdd() {
    return (
      <div
        className="modal show d-block"
        id="addStudentModal"
        tabIndex={-1}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <style>{`
                .modal-content{ border-radius:14px; }
                .modal-header .btn-close{ box-shadow:none; }
                .form-label{ font-weight:600; }
              `}</style>

            <div className="modal-header">
              <h5 className="modal-title fw-bold">Thêm mới sinh viên</h5>
              <button
                type="button"
                className="btn-close"
                onClick={this.closeModal}
              />
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3 text-start">
                  <label className="form-label">Mã sinh viên</label>
                  <input
                    type="text"
                    className="form-control"
                    ref={this.codeRef}
                  />
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label">Tên sinh viên</label>
                  <input
                    type="text"
                    className="form-control"
                    ref={this.nameRef}
                  />
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label">Ngày sinh</label>
                  <input
                    type="date"
                    className="form-control"
                    ref={this.dobRef}
                  />
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    ref={this.emailRef}
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light border"
                onClick={this.closeModal}
              >
                Hủy
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderModal() {
    return (
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
                onClick={this.closeModal}
              />
            </div>

            <div className="modal-body">
              <div className="d-flex align-items-start gap-3">
                <div className="text-danger fs-3">
                  <i className="bi bi-exclamation-octagon-fill"></i>
                </div>
                {this.state.removeId ? (
                  <p className="mb-0">
                    Bạn chắc chắn muốn xoá sinh viên này không
                  </p>
                ) : (
                  <p className="mb-0">
                    Bạn chắc chắn muốn chặn sinh viên này không
                  </p>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light border"
                onClick={this.closeModal}
              >
                Hủy
              </button>
              {this.state.removeId ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.confirmDelete}
                >
                  Xóa
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.confirmBlock}
                >
                  Chặn
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="container py-4">
        <style>{`
          .page-title{font-weight:700}
          .toolbar .form-select, .toolbar .form-control{max-width:280px}
          .badge-soft{border:1px solid transparent;font-weight:500;padding:.5rem .75rem;border-radius:5px}
          .badge-soft.success{background:#e9f7ef;color:#1e7e34;border-color:#b7ebc6}
          .badge-soft.danger{background:#fdecea;color:#b02a37;border-color:#ffb3ae}
          .btn-chip{border-radius:5px}
        `}</style>
        {this.renderHeader()}
        {this.renderToolbar()}
        {this.renderTable()}
        {this.state.openModalAdd && this.renderModalAdd()}
        {this.state.openModal && this.renderModal()}
      </div>
    );
  }
}
