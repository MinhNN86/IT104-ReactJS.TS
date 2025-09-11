import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Home_Ex07() {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <h1>Trang chủ</h1>
      <p>
        Đây là trang chủ. Thử gõ mội đường dẫn không tồn tại (ví dụ /abcxyz) vào
        thanh địa chỉ để xem trang 404
      </p>
      <Button
        color="primary"
        variant="solid"
        onClick={() => navigate("/ex07/about")}
      >
        About
      </Button>
    </div>
  );
}
