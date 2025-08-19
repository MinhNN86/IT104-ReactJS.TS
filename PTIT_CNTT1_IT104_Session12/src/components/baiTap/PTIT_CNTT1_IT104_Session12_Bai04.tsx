import React, { Component } from "react";

export default class PTIT_CNTT1_IT104_Session12_Bai04 extends Component {
  render() {
    const colorBox = (color: string) => {
      const boxStyle: React.CSSProperties = {
        width: "200px",
        height: "200px",
        backgroundColor: color,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      };

      return <div style={boxStyle}>Box</div>;
    };

    return (
      <div style={{ display: "flex", gap: 10 }}>
        <div>{colorBox("red")}</div>
        <div>{colorBox("blue")}</div>
        <div>{colorBox("green")}</div>
      </div>
    );
  }
}
