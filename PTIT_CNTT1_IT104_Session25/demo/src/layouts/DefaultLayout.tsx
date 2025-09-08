import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";

export default function DefaultLayout() {
  const customStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      backgroundColor: isActive ? "red" : "",
      color: isActive ? "#fff" : "",
    };
  };

  // Navigate được dùng để chuyển hướng người dùng từ trang này sang trang khác bằng logic trong code
  const navigate = useNavigate();

  const goToOrder = () => {
    navigate("/user/order");
  };

  const isLogin = true;

  return (
    <div>
      {/* Link: chuyển trang web không cần reload */}
      {/* NavLink: tương tự như Link và thêm thuộc tính class="active" trang web đang được hiển thị*/}
      <header>
        <nav style={{ display: "flex", gap: 20 }}>
          <NavLink style={customStyle} end to="/user">
            Profile
          </NavLink>
          <NavLink style={customStyle} to="/user/order">
            Order
          </NavLink>
          <NavLink style={customStyle} to="/user/change-password">
            Change password
          </NavLink>
        </nav>
      </header>

      {/* Phạm vi hiển thị nội dung của trang */}
      <Outlet />

      {/* Outlet: để xác định vị trí hiển thị component con khi route trùng khớp */}

      <div style={{ display: "flex", gap: 20 }}>
        <button onClick={goToOrder}>Xem Order</button>
        <button onClick={() => navigate(-1)}>⬅️ Lùi lại</button>
        <button onClick={() => navigate(1)}>➡️ Tiến lên</button>
        <button onClick={() => navigate("/user/order", { replace: true })}>
          Go to order - Not save history
        </button>
      </div>

      <h2>Demo Protected Route</h2>
      {isLogin ? <Outlet /> : <Navigate to={"/login"} />}

      <footer>Footer</footer>
    </div>
  );
}
