import { useParams, useNavigate } from "react-router-dom";
import { posts } from "./Posts_Ex05";
import { Card, Button } from "antd";

export default function PostDetail_Ex05() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 400,
      }}
    >
      {post ? (
        <Card style={{ width: 500 }}>
          <p>{post.title}</p>
          <p>{post.excerpt}</p>
          <Button type="primary" onClick={() => navigate(-1)} className="mt-2">
            Quay lại
          </Button>
        </Card>
      ) : (
        <Card title="Không tìm thấy bài viết" style={{ width: 400 }}>
          <Button type="default" onClick={() => navigate(-1)}>
            Quay lại
          </Button>
        </Card>
      )}
    </div>
  );
}
