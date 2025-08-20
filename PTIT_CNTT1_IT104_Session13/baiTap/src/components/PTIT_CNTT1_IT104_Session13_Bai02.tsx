import React, { Component } from "react";

type StateTypes = {
  id?: number;
  name?: string;
  dob?: string;
  address?: string;
};

export default class PTIT_CNTT1_IT104_Session13_Bai02 extends Component<
  object,
  StateTypes
> {
  constructor(props: object) {
    super(props);

    this.state = {
      id: 1,
      name: "Nguyễn Văn Sơn",
      dob: "20/12/2023",
      address: "Thanh Xuân, Hà Nội",
    };
  }
  render() {
    return (
      <div>
        <h2>Thông tin cá nhân</h2>
        <div>id: {this.state.id}</div>
        <div>Tên: {this.state.name}</div>
        <div>Ngày sinh: {this.state.dob}</div>
        <div>Địa chỉ: {this.state.address}</div>
      </div>
    );
  }
}
