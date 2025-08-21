import React, { Component, createRef } from "react";

type User = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

type StateType = {
  user: {
    name: string;
    email: string;
    password: string;
    phone: string;
  };
};

export default class PTIT_CNTT1_IT104_Session14_Bai07 extends Component<
  object,
  StateType
> {
  private nameRef = createRef<HTMLInputElement>();
  constructor(props: object) {
    super(props);

    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        phone: "",
      },
    };
  }
  render() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      this.setState({
        user: {
          ...this.state.user,
          [name]: value,
        },
      });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const { name, email, password, phone } = this.state.user;
      if (!name || !email || !password) {
        alert("Không được để trống thông tin");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const checkEmail = users.some((user: User) => user.email === email);
      if (checkEmail) {
        alert("Email đã tồn tại");
        return;
      }

      const newUser: User = this.state.user;
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      this.setState({
        user: {
          name: "",
          email: "",
          password: "",
          phone: "",
        },
      });

      alert("Đăng ký tài khoản thành công");
      this.nameRef.current?.focus();
    };

    return (
      <div>
        <h1>Đăng ký tài khoản</h1>
        <form onSubmit={handleSubmit}>
          <div>Tên sinh viên</div>
          <input
            type="text"
            name="name"
            ref={this.nameRef}
            onChange={handleChange}
            value={this.state.user.name}
          />
          <div>Email</div>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={this.state.user.email}
          />
          <div>Mật khẩu</div>
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={this.state.user.password}
          />
          <div>Số điện thoại</div>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={this.state.user.phone}
          />
          <div>
            <button>Đăng ký</button>
          </div>
        </form>
      </div>
    );
  }
}
