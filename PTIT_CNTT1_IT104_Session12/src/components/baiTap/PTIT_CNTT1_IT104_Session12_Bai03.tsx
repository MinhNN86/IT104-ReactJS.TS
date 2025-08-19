import React, { Component } from "react";

export default class PTIT_CNTT1_IT104_Session12_Bai03 extends Component {
  render() {
    const user = {
      name: "Nguyễn Văn A",
      gender: "Nam",
      dob: "06/03/2024",
      email: "nva@gmail.com",
      address: "Thanh Xuân, Hà Nội",
    };
    return (
      <React.Fragment>
        <h1>Thông tin cá nhân</h1>
        <ul>
          <li>Họ và tên: {user.name}</li>
          <li>Giới tính: {user.gender}</li>
          <li>Ngày sinh: {user.dob}</li>
          <li>Email: {user.email}</li>
          <li>Địa chỉ: {user.address}</li>
        </ul>
      </React.Fragment>
    );
  }
}
