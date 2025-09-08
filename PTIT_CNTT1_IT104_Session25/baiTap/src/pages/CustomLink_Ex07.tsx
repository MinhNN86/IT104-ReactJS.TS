import { Link } from "react-router-dom";

export default function CustomLink_Ex07() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <Link to="/home-page">HomePage</Link>
      <Link to="/abc">Error 404</Link>
    </div>
  );
}
