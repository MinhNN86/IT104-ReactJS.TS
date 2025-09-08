import { Navigate } from "react-router-dom";

interface User {
  email?: string;
  password?: string;
}

const userLogin: User | [] = JSON.parse(
  localStorage.getItem("userLogin") || "[]"
);

export default function Home_Ex10() {
  if (!userLogin || !("email" in userLogin) || !userLogin.email) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ margin: 20 }}>
      <h1>Home page</h1>
      Email: {userLogin.email}
    </div>
  );
}
