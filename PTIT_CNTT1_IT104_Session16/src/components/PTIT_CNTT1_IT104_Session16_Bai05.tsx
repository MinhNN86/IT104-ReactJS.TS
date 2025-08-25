import React, { Component, createRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
type StateTypes = {
  name?: string;
  email?: string;
  age?: number;
  error?: string;
  showInfo: boolean;
};
export default class PTIT_CNTT1_IT104_Session16_Bai05 extends Component<
  object,
  StateTypes
> {
  private nameRef = createRef<HTMLInputElement>();
  private emailRef = createRef<HTMLInputElement>();
  private ageRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);

    this.state = {
      name: undefined,
      email: undefined,
      age: undefined,
      error: undefined,
      showInfo: false,
    };
  }
  render() {
    const handleSubmit = () => {
      const inputName = this.nameRef.current?.value;
      const inputEmail = this.emailRef.current?.value;
      const inputAgeStr = this.ageRef.current?.value;
      const inputAge =
        inputAgeStr !== undefined && inputAgeStr !== ""
          ? Number(inputAgeStr)
          : undefined;

      if (
        !inputName ||
        !inputEmail ||
        inputAge === undefined ||
        isNaN(inputAge)
      ) {
        this.setState({
          error: "Thông tin nhập vào không hợp lệ",
        });
        return;
      }

      if (!inputEmail.includes("@")) {
        this.setState({
          error: "Email không hợp lệ",
        });
        return;
      }

      if (inputAge < 0) {
        this.setState({
          error: "Tuổi không được âm",
        });
        return;
      }

      this.setState({
        name: inputName,
        email: inputEmail,
        age: inputAge,
        error: undefined,
        showInfo: true,
      });
    };

    const handleRemove = () => {
      if (this.nameRef.current) this.nameRef.current.value = "";
      if (this.emailRef.current) this.emailRef.current.value = "";
      if (this.ageRef.current) this.ageRef.current.value = "";
      this.setState({
        name: undefined,
        email: undefined,
        age: undefined,
        error: undefined,
        showInfo: false,
      });
    };

    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center ">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <h3 className="fw-bold text-center mb-4">
                <span role="img" aria-label="note">
                  📝
                </span>{" "}
                Nhập thông tin người dùng
              </h3>

              {/* Form chỉ UI, không xử lý */}
              <form noValidate>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Họ tên"
                    ref={this.nameRef}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    ref={this.emailRef}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Tuổi"
                    ref={this.ageRef}
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={handleSubmit}
                  >
                    Gửi
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary px-4"
                    onClick={handleRemove}
                  >
                    Xóa tất cả
                  </button>
                </div>
                {this.state.error && (
                  <div className="form-text text-danger mt-2">
                    ⚠️ {this.state.error}
                  </div>
                )}
              </form>

              {/* Khung hiển thị thông tin (ẩn mặc định). Bỏ 'd-none' để hiện */}
              {this.state.showInfo && (
                <div className="mt-4 p-4 rounded-3 border bg-light ">
                  <h5 className="fw-semibold mb-3">✅ Thông tin đã nhập:</h5>
                  <p className="mb-1">
                    Họ tên: <strong>{this.state.name}</strong>
                  </p>
                  <p className="mb-1">
                    Email: <strong>{this.state.email}</strong>
                  </p>
                  <p className="mb-0">
                    Tuổi: <strong>{this.state.age}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
