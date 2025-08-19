import React, { Component } from "react";

export default class PTIT_CNTT1_IT104_Session12_Bai05 extends Component {
  render() {
    interface User {
      firstName: string;
      lastName: string;
    }

    const user: User = {
      firstName: "Nguyễn Văn",
      lastName: "Nam",
    };

    const formatName = (user: User): string => {
      return `${user.firstName} ${user.lastName}`;
    };

    return <div>{formatName(user)}</div>;
  }
}
