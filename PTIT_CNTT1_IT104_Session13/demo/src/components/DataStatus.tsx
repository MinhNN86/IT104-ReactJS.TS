import React, { Component } from "react";

type StateTypes = {
  status: "loading" | "success" | "error" | string;
};

export default class DataStatus extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      status: "error",
    };
  }
  render() {
    switch (this.state.status) {
      case "loading":
        return <h2>Đang tải dữ liệu...</h2>;
      case "success":
        return <h2>Tải dữ liệu thành công</h2>;
      case "error":
        return <h2>Tải dữ liệu thất bại</h2>;
      default:
        return <h2>Trạng thái không chính xác</h2>;
    }
}
