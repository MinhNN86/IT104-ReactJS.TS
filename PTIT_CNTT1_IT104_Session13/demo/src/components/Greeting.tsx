import React, { Component } from "react";

export default class Greeting extends Component {
  render() {
    const userName = null;
    // ?? nếu giá trị kiểm tra là null / undefined thì lấy giá trị sau dấu "??"
    return <div>{userName ?? "Guest"}</div>;
  }
}
