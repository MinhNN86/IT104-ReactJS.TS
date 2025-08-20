import React, { Component } from "react";

export default class UserRole extends Component {
  render() {
    // null, undefined, 0, "", NaN, false === false
    const isAdmin = true;
    return (
      <div>
        {isAdmin ? (
          <h2>Đây là Quản trị viên</h2>
        ) : (
          <h2>Đây không phải là Quản trị viên</h2>
        )}
      </div>
    );
  }
}
