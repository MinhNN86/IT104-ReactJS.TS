import React, { useEffect, useState } from "react";

export default function PTIT_CNTT1_IT104_Session19_Bai04() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (!name.trim()) {
      setNameError("Trường này là bắt buộc");
    } else {
      setNameError("");
    }
  }, [name]);

  useEffect(() => {
    if (!email.trim()) {
      setEmailError("Trường này là bắt buộc");
    } else if (!email.endsWith("@gmail.com")) {
      setEmailError("Email không đúng định dạng");
    } else {
      setEmailError("");
    }
  }, [email]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nameError && !emailError) {
      alert("Gửi thành công!");
      setName("");
      setEmail("");
    }
  };
  return (
    <div>
      <form
        style={{
          maxWidth: 360,
          margin: "40px auto",
          background: "#fff",
          borderRadius: 16,
          padding: 32,
          boxShadow: "0 2px 16px #0001",
          fontFamily: "sans-serif",
        }}
        onSubmit={handleSubmit}
      >
        <h2 style={{ marginBottom: 24 }}>
          <span role="img" aria-label="form" style={{ marginRight: 8 }}>
            📝
          </span>
          <span style={{ color: "black" }}> Đăng ký thông tin</span>
        </h2>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 600, color: "black" }}>Họ tên</label>
          <input
            style={{
              width: "100%",
              marginTop: 6,
              padding: 10,
              borderRadius: 8,
              border: "none",
              background: "#333",
              color: "#fff",
              fontSize: 16,
              outline: "none",
              marginBottom: 2,
            }}
            placeholder="Nhập họ tên..."
            onChange={(e) => setName(e.target.value)}
          />
          <div
            style={{
              color: "#f6a800",
              fontSize: 14,
              marginTop: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            {nameError && (
              <>
                <span style={{ marginRight: 5 }}>⚠️</span> {nameError}
              </>
            )}
          </div>
        </div>
        <div style={{ marginBottom: 28 }}>
          <label style={{ fontWeight: 600, color: "black" }}>Email</label>
          <input
            style={{
              width: "100%",
              marginTop: 6,
              padding: 10,
              borderRadius: 8,
              border: "none",
              background: "#333",
              color: "#fff",
              fontSize: 16,
              outline: "none",
              marginBottom: 2,
            }}
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            style={{
              color: "#e03c3c",
              fontSize: 14,
              marginTop: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            {emailError && (
              <>
                <span style={{ marginRight: 5 }}>⚠️</span> {emailError}
              </>
            )}
          </div>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            fontWeight: 700,
            fontSize: 18,
            borderRadius: 8,
            border: "none",
            background: "#0094ff",
            color: "#fff",
            cursor: "pointer",
            cursor:
              !nameError && !emailError && name && email
                ? "pointer"
                : "not-allowed",
            opacity: !nameError && !emailError && name && email ? 1 : 0.5,
            transition: "0.2s",
          }}
          disabled={!!nameError || !!emailError || !name || !email}
        >
          Gửi
        </button>
      </form>
    </div>
  );
}
