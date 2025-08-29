import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

type User = {
  name: string;
  email: string;
};

export default function PTIT_CNTT1_IT104_Session20_Bai02() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserInfo({ name: name, email: email });
  };
  return (
    <div className="container" style={{ maxWidth: 500, margin: "40px auto" }}>
      <div className="card shadow">
        <div className="card-body bg-light">
          <h3 className="mb-4 mt-2 fw-bold">Thông tin người dùng</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success px-4 mb-2">
              Gửi
            </button>
          </form>
          {userInfo && (
            <div className="alert alert-success mt-3" style={{ fontSize: 17 }}>
              <div>
                <b>Tên:</b> {userInfo?.name}
              </div>
              <div>
                <b>Email:</b> {userInfo?.email}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
