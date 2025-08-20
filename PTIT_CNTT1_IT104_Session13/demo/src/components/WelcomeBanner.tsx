import React, { Component } from "react";

export default class WelcomeBanner extends Component {
  render() {
    const isLogin = true;
    // && => nếu điều kiện đúng thì thực hiện sau dấu "&&"
    return <div>{isLogin && <h2>Welcome back</h2>}</div>;
  }
}
