import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PTIT_CNTT1_IT104_Session20_Bai04() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (name.trim()) {
      document.title = `Chào, ${name}`;
    } else {
      document.title = "Trang web của bạn";
    }
  }, [name]);

  return (
    <div className="container" style={{ maxWidth: 550, margin: "40px auto" }}>
      <div className="card shadow">
        <div className="card-body bg-light">
          <h3 className="mb-4 mt-2 fw-bold text-center">
            Chào mừng bạn đến với trang của chúng tôi!
          </h3>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Nhập tên của bạn..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div
            className="alert alert-secondary text-center"
            style={{ fontSize: 16 }}
          >
            Tiêu đề sẽ thay đổi dựa trên giá trị tên người dùng.
          </div>
        </div>
      </div>
    </div>
  );
}
