import React, { Component } from "react";

export default class PTIT_CNTT1_IT104_Session16_Bai01 extends Component {
  render() {
    const subjects: string[] = ["Toán", "Văn", "Anh", "Hóa", "Sinh"];
    return (
      <div>
        <h1>Danh sách các môn học</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {subjects.map((subjects) => (
            <div
              style={{
                width: "200px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#DFF7F9",
                color: "#2E88C4",
                marginTop: "15px",
                borderRadius: "10px",
              }}
            >
              {subjects}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
