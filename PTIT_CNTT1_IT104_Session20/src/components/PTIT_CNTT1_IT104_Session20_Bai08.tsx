import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PTIT_CNTT1_IT104_Session20_Bai08() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: "32px 0",
      }}
    >
      <div className="bg-white rounded-4 shadow p-5">
        <h3 className="text-center mb-4" style={{ fontWeight: 600 }}>
          User Information Form
        </h3>
        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="name"
            style={{ display: "block", textAlign: "left" }}
          >
            <b>Tên:</b>
          </label>
          <input
            className="form-control"
            id="name"
            type="text"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="mb-4">
          <label
            className="form-label"
            htmlFor="email"
            style={{ display: "block", textAlign: "left" }}
          >
            <b>Email:</b>
          </label>
          <input
            className="form-control"
            id="email"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        <div
          className="p-4 bg-light rounded-3 mt-3"
          style={{
            borderLeft: "4px solid #0d6efd",
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          }}
        >
          <div className="mb-2" style={{ fontWeight: 600, fontSize: 18 }}>
            Thông tin người dùng:
          </div>
          <div className="mb-1" style={{ textAlign: "left" }}>
            <span
              style={{
                color: "#0d6efd",
                fontWeight: 600,
              }}
            >
              Tên:
            </span>{" "}
            {name ? name : "(Chưa nhập)"}
          </div>
          <div style={{ textAlign: "left" }}>
            <span style={{ color: "#0d6efd", fontWeight: 600 }}>Email:</span>{" "}
            {email ? email : "(Chưa nhập)"}
          </div>
        </div>
      </div>
    </div>
  );
}
