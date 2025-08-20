import React, { Component } from "react";

type StateTypes = {
  user: {
    name?: string;
    isVerified?: boolean;
  };
};

export default class UserDashboard extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      user: {
        name: "Nguyễn Văn A",
        isVerified: true,
      },
    };
  }
  render() {
    if (!this.state.user) {
      return <h2>Vui lòng đăng nhập</h2>;
    } else if (this.state.user && !this.state.user.isVerified) {
      return <h2>Vui lòng xác thực tài khoản </h2>;
    } else {
      return <h2>Xin chào {this.state.user.name}</h2>;
    }
  }
}
