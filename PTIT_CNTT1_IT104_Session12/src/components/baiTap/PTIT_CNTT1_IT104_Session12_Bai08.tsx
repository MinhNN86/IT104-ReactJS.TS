import React, { Component } from "react";

export default class PTIT_CNTT1_IT104_Session12_Bai08 extends Component {
  render() {
    interface User {
      id: number;
      fullName: string;
      dob: string;
      gender: string;
      address: string;
    }

    let user: User[] = [
      {
        id: 1,
        fullName: "Malcolm Lockyer",
        dob: "21/03/1961",
        gender: "Nam",
        address: "New york",
      },
      {
        id: 2,
        fullName: "Maria",
        dob: "11/02/1990",
        gender: "Nữ",
        address: "London",
      },
    ];

    const userRow = (user: User) => {
      return (
        <tr style={{ backgroundColor: "#FFFFFF", color: "black" }}>
          <td>{user.id}</td>
          <td>{user.fullName}</td>
          <td>{user.dob}</td>
          <td>{user.gender}</td>
          <td>{user.address}</td>
          <td>
            <button style={{ marginRight: 8 }}>Sửa</button>
            <button
              style={{
                background: "red",
                color: "#fff",
                border: "none",
                // padding: "4px 8px",
              }}
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    };

    const tableHeader = () => {
      return (
        <thead style={{ background: "#f7fafd", color: "#94a3b8" }}>
          <tr>
            <th style={{ width: "50px" }}>STT</th>
            <th style={{ width: "200px" }}>Họ và tên</th>
            <th style={{ width: "150px" }}>Ngày sinh</th>
            <th style={{ width: "100px" }}>Giới tính</th>
            <th style={{ width: "200px" }}>Địa chỉ</th>
            <th style={{ width: "150px" }}>Hành động</th>
          </tr>
        </thead>
      );
    };

    return (
      <div
        style={{
          padding: 20,
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          {tableHeader()}
          <tbody>{user.map((user, index) => userRow(user))}</tbody>
        </table>
      </div>
    );
  }
}
