import { Card } from "antd";
import { Link } from "react-router-dom";

export interface Post {
  id: number;
  title: string;
  excerpt: string;
}
export const posts: Post[] = [
  {
    id: 1,
    title: "Bắt đầu với React",
    excerpt: "Giới thiệu về React và cách khởi tạo dự án...",
  },
  {
    id: 2,
    title: "Sử dụng TailwindCSS",
    excerpt: "Tailwind giúp bạn viết CSS nhanh và tiện lợi...",
  },
  {
    id: 3,
    title: "Giới thiệu về React Router",
    excerpt: "Điều hướng trong React với React Router DOM...",
  },
  {
    id: 4,
    title: "Quản lý state với Redux",
    excerpt: "Redux giúp quản lý state tập trung...",
  },
  {
    id: 5,
    title: "Hooks trong React",
    excerpt: "useState, useEffect và các hook phổ biến...",
  },
];

export default function Posts_Ex05() {
  return (
    <div>
      <h1 className="font-bold text-xl">Danh sách bài viết</h1>
      <div className="flex flex-col gap-3">
        {posts.map((p) => (
          <Card style={{ width: 400 }}>
            <Link
              to={`/blog-ex05/${p.id}`}
              className="font-bold text-blue-600 underline"
            >
              {p.title}
            </Link>
            <p>{p.excerpt}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
