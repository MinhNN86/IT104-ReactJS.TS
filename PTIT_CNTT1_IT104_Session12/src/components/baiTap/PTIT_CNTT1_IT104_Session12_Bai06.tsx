import React, { Component } from "react";

export default class PTIT_CNTT1_IT104_Session12_Bai06 extends Component {
  render() {
    const header = () => {
      return (
        <div
          style={{ background: "#ddd", padding: "10px", textAlign: "center" }}
        >
          Header
        </div>
      );
    };

    const menu = () => {
      return (
        <div
          style={{
            background: "#123c87",
            color: "#fff",
            width: "150px",
            padding: "10px",
          }}
        >
          Menu
        </div>
      );
    };

    const main = () => {
      return (
        <div style={{ padding: "10px", textAlign: "center", height: "93%" }}>
          Main
        </div>
      );
    };

    const footer = () => {
      return (
        <div
          style={{ background: "#ddd", padding: "10px", textAlign: "center" }}
        >
          Footer
        </div>
      );
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vh",
        }}
      >
        {header()}
        <div style={{ display: "flex", height: "100%" }}>
          {menu()}
          <div style={{ width: "100%", height: "100%" }}>
            {main()}
            {footer()}
          </div>
        </div>
      </div>
    );
  }
}
