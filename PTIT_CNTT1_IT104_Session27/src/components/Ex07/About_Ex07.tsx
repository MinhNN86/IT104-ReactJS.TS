import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function About_Ex07() {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <h1>About</h1>
      <p>Trang giới thiệu mẫu.</p>
      <Button color="primary" variant="solid" onClick={() => navigate(-1)}>
        Quay về trang chủ
      </Button>
    </div>
  );
}
