import { useEffect, useReducer, useState } from "react";

type State = {
  status: "idle" | "loading" | "success" | "error";
  error: string;
};

type Action =
  | { type: "LOGIN" }
  | { type: "SUCCESS" }
  | { type: "ERROR"; error: string }
  | { type: "RESET" };

const initialState: State = {
  status: "idle",
  error: "",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN":
      return { status: "loading", error: "" };
    case "SUCCESS":
      return { status: "success", error: "" };
    case "ERROR":
      return { status: "error", error: action.error || "Đăng nhập thất bại" };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default function PTIT_CNTT1_IT104_Session19_Bai08() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "LOGIN" });

    setTimeout(() => {
      if (username === "admin" && password === "123456") {
        dispatch({ type: "SUCCESS" });
      } else {
        dispatch({ type: "ERROR", error: "Sai tên hoặc mật khẩu!" });
      }
    }, 1800);
  };

  useEffect(() => {
    if (state.status === "success") {
      setTimeout(() => {
        dispatch({ type: "RESET" });
        setUserName("");
        setPassword("");
      }, 2000);
    }
  }, [state.status]);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 500,
        margin: "56px auto",
        background: "#fff",
        borderRadius: 18,
        padding: "20px 100px",
        boxShadow: "0 2px 18px #0001",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 32, color: "#592f99" }}>
        <span
          role="img"
          aria-label="user"
          style={{ marginRight: 8, fontSize: 28 }}
        >
          👤
        </span>
        Đăng nhập
      </h2>
      <div
        style={{
          marginBottom: 18,
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <label
          style={{
            fontWeight: 600,
            color: "black",
            display: "block",
            textAlign: "left",
          }}
        >
          Tên người dùng
        </label>
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
          placeholder="Nhập tên..."
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          disabled={state.status === "loading"}
        />
      </div>
      <div style={{ marginBottom: 24 }}>
        <label
          style={{
            fontWeight: 600,
            color: "black",
            display: "block",
            textAlign: "left",
          }}
        >
          Mật khẩu
        </label>
        <input
          type="password"
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
          placeholder="Nhập mật khẩu..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={state.status === "loading"}
        />
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          padding: 13,
          fontWeight: 700,
          fontSize: 18,
          borderRadius: 8,
          border: "none",
          background: "#2187ff",
          color: "#fff",
          cursor: state.status === "loading" ? "not-allowed" : "pointer",
          opacity: state.status === "loading" ? 0.7 : 1,
          transition: "0.2s",
        }}
        disabled={state.status === "loading"}
      >
        Đăng nhập
      </button>

      <div
        style={{
          minHeight: 28,
          marginTop: 16,
          textAlign: "center",
          fontSize: 16,
        }}
      >
        {state.status === "loading" && (
          <span style={{ color: "black" }}>
            <span role="img" aria-label="loading" style={{ marginRight: 4 }}>
              ⏳
            </span>
            Đang đăng nhập...
          </span>
        )}
        {state.status === "error" && (
          <span style={{ color: "#d62222" }}>
            <span role="img" aria-label="error" style={{ marginRight: 4 }}>
              ❌
            </span>
            {state.error}
          </span>
        )}
        {state.status === "success" && (
          <span style={{ color: "#0d8f4d" }}>
            <span role="img" aria-label="success" style={{ marginRight: 4 }}>
              ✅
            </span>
            Đăng nhập thành công!
          </span>
        )}
      </div>
    </form>
  );
}
