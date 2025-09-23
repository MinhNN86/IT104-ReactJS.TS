import { useNavigate } from "react-router-dom";
import { useAppDisPath, useAppSelector } from "../hooks/useCustomRedux";
import { logOut } from "../slices/loginSlice";

export default function UserInfo() {
  const user = useAppSelector((state) => state.login);
  const dispatch = useAppDisPath();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <div className="card small m-10">
      <div className="line">
        <strong>User Name:</strong> {user.userName}
      </div>
      <div className="line">
        <strong>Email:</strong> {user.email}
      </div>

      <button className="btn btn-outline" onClick={handleLogOut}>
        Đăng xuất
      </button>
    </div>
  );
}
