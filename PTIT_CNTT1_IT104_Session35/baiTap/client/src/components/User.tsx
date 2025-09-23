import { useAppDisPath, useAppSelector } from "../hooks/useCustomRedux";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { updateFavorite } from "../slices/userSlice";
type User = { id: number; name: string; favorite: boolean };

export default function User() {
  const users = useAppSelector((state) => state.user);
  const dispatch = useAppDisPath();
  console.log(users);
  const handleChange = (user: User) => {
    dispatch(updateFavorite(user));
  };
  return (
    <div
      className="m-20"
      style={{
        width: 360,
        border: "1px solid #e5e7eb",
        borderRadius: 4,
        padding: 12,
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial',
        background: "#fff",
      }}
    >
      <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>
        List Favorites User
      </h3>

      {users.map((u, idx) => (
        <div key={u.id} style={{ padding: "14px 6px" }}>
          <div style={{ marginBottom: 6, fontSize: 16 }}>
            <span style={{ color: "#111" }}>UserName: </span>
            {u.name}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>Favorites:</span>
            <button
              aria-label="toggle-favorite"
              //   onClick={() => toggleFav(u.id)}
              onClick={() => handleChange(u)}
              style={{
                border: "none",
                background: "transparent",
                padding: 0,
                lineHeight: 1,
                cursor: "pointer",
              }}
              title={u.favorite ? "Bỏ yêu thích" : "Thêm yêu thích"}
            >
              {u.favorite ? (
                <HeartFilled style={{ fontSize: 20, color: "#e11d48" }} />
              ) : (
                <HeartOutlined style={{ fontSize: 20 }} />
              )}
            </button>
          </div>

          {idx !== users.length - 1 && (
            <div
              style={{
                marginTop: 12,
                height: 1,
                background: "#eee",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
