import React, { Component } from "react";

type StateTypes = {
  isLoggedIn: boolean;
};
export default class PTIT_CNTT1_IT104_Session16_Bai02 extends Component<
  object,
  StateTypes
> {
  constructor(props: object) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    const handleChange = () => {
      this.setState({
        isLoggedIn: !this.state.isLoggedIn,
      });
    };
    return (
      <div>
        <div>
          {this.state.isLoggedIn
            ? "Xin chào, User!"
            : "Vui lòng đăng nhập để tiếp tục"}
        </div>
        <button onClick={handleChange}>
          {this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}
