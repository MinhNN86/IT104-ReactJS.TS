import React, { Component } from "react";
import "../styles/style.css";

export default class DemoStyle extends Component {
  render() {
    const style = {
      color: "red",
      height: 200,
      width: 200,
      border: "1px solid black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
    return (
      <div>
        <h1 className="heading">Demo Style CSS file</h1>
        <div style={style}>Hình vuông</div>
      </div>
    );
  }
}
