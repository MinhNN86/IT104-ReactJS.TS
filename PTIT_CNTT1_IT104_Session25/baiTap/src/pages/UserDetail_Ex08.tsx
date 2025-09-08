import { Link, Navigate, useParams } from "react-router-dom";

interface User {
  id: number;
  username: string;
  email: string;
  address: string;
}
const users: User[] = [
  {
    id: 1,
    username: "Nguyễn Văn A",
    email: "nva@gmail.com",
    address: "Hà Nội",
  },
  {
    id: 2,
    username: "Nguyễn Văn B",
    email: "nvb@gmail.com",
    address: "Hà Nam",
  },
  {
    id: 3,
    username: "Nguyễn Văn C",
    email: "nvc@gmail.com",
    address: "Ninh Bình",
  },
];

export default function UserDetail_Ex08() {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <Navigate to="/not-found" />;
  }

  return (
    <div
      style={{ margin: 50, border: "1px solid #ccc", padding: 16, width: 300 }}
    >
      <h2>Thông tin chi tiết</h2>
      <p>
        <b>Id:</b> {user.id}
      </p>
      <p>
        <b>UserName:</b> {user.username}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Address:</b> {user.address}
      </p>
      <Link to="/user">
        <button style={{ color: "white", backgroundColor: "#4096ff" }}>
          Quay lại danh sách
        </button>
      </Link>
    </div>
  );
}
