import { Link } from "react-router-dom";
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

export default function ListUser_Ex08() {
  return (
    <div style={{ margin: 50, display: "flex", gap: 20 }}>
      {users.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid #ccc", padding: 16, width: 200 }}
        >
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
          <Link to={`/user/${user.id}`}>
            <button style={{ color: "white", backgroundColor: "#4096ff" }}>
              Xem chi tiết
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
