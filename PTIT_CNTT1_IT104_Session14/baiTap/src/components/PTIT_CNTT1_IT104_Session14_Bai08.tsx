import React, { Component, createRef } from "react";

type User = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export default class PTIT_CNTT1_IT104_Session14_Bai08 extends Component {
  private emailRef = createRef<HTMLInputElement>();
  private passwordRef = createRef<HTMLInputElement>();

  render() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const emailInput = (this.emailRef.current?.value || "").trim();
      const passwordInput = (this.passwordRef.current?.value || "").trim();
      if (!emailInput || !passwordInput) {
        alert("Thông tin không được để trống");
        return;
      }

      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
      const checkEmail = users.find(
        (user: User) => user.email.toLowerCase() === emailInput.toLowerCase()
      );

      if (!checkEmail) {
        alert("Email không hợp lệ");
        return;
      }
      if (checkEmail.password !== passwordInput) {
        alert("Mật khẩu không đúng");
        return;
      }

      alert("Đăng nhập thành công");
    };
    return (
      <div>
        <h1>Đăng nhập tài khoản</h1>
        <form onSubmit={handleSubmit}>
          <div>Email</div>
          <input type="text" name="email" ref={this.emailRef} />
          <div>Mật khẩu</div>
          <input type="password" name="password" ref={this.passwordRef} />
          <div>
            <button>Đăng nhập</button>
          </div>
        </form>
      </div>
    );
  }
}
