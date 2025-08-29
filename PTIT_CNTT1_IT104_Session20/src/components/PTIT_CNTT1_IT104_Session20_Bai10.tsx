import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type Post = {
  id: number;
  title: string;
  tag: string;
};

const postsData = [
  { id: 1, title: "Tìm hiểu về JavaScript ES6", tag: "JavaScript" },
  { id: 2, title: "CSS Grid vs Flexbox", tag: "CSS" },
  { id: 3, title: "Hướng dẫn tối ưu hóa hiệu suất web", tag: "Performance" },
  { id: 4, title: "Hướng dẫn sử dụng React", tag: "React" },
];

export default function PTIT_CNTT1_IT104_Session20_Bai10() {
  const [readPost, setReadPost] = useState<Post[]>([]);
  const [unreadPosts, setUnreadPosts] = useState<Post[]>(postsData);

  const markAsRead = (id: number) => {
    const post = unreadPosts.find((p) => p.id === id);
    setUnreadPosts(unreadPosts.filter((p) => p.id !== id));
    if (post) {
      setReadPost([...readPost, post]);
    }
  };

  const markAsUnread = (id: number) => {
    const post = readPost.find((p) => p.id === id);
    setReadPost(readPost.filter((p) => p.id !== id));
    if (post) {
      setUnreadPosts([...unreadPosts, post]);
    }
  };

  const total = postsData.length;
  const done = readPost.length;
  const progress = Math.round((done / total) * 100);

  return (
    <div className="container" style={{ maxWidth: 700, margin: "40px auto" }}>
      <div className="bg-white rounded-4 shadow p-4">
        <h2
          className="text-center mb-4"
          style={{ fontWeight: 700, color: "#29486a" }}
        >
          Quản lý bài viết
        </h2>
        <div className="progress" style={{ height: 7, marginBottom: 12 }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${progress}%`, backgroundColor: "#3CB371" }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="text-end mb-4 text-secondary" style={{ fontSize: 15 }}>
          Đã đọc: {done}/{total} bài viết ({progress} %)
        </div>

        <div className="bg-light p-4 rounded-3 mb-4">
          <div className="mb-3 d-flex align-items-center">
            <span className="fw-bold" style={{ fontSize: 18 }}>
              Bài viết chưa đọc
            </span>
            <span className="badge bg-primary ms-2">{unreadPosts.length}</span>
          </div>
          {unreadPosts.map((post) => (
            <div
              className="mb-3 p-3 bg-white rounded-3 shadow-sm border"
              style={{ borderLeft: "5px solid #0d6efd" }}
              key={post.id}
            >
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div style={{ paddingRight: 30 }}>
                  <div style={{ fontWeight: 600 }}>{post.title}</div>
                  <div style={{ textAlign: "left" }}>
                    <span className="badge bg-secondary mt-1">{post.tag}</span>
                  </div>
                </div>
                <button
                  className="btn btn-success mt-2"
                  style={{ minWidth: 145, fontWeight: 500 }}
                  onClick={() => markAsRead(post.id)}
                >
                  Đánh dấu đã đọc
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-light p-4 rounded-3">
          <div className="mb-3 d-flex align-items-center">
            <span className="fw-bold" style={{ fontSize: 18 }}>
              Bài viết đã đọc
            </span>
            <span className="badge bg-success ms-2">{readPost.length}</span>
          </div>
          {readPost.length === 0 && (
            <div className="text-secondary fst-italic mb-2">
              Chưa có bài viết nào được đọc!
            </div>
          )}
          {readPost.map((post: Post) => (
            <div
              className="mb-3 p-3 bg-white rounded-3 shadow-sm border"
              key={post.id}
            >
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div>
                  <div style={{ fontWeight: 600 }}>{post.title}</div>
                  <div style={{ textAlign: "left" }}>
                    <span className="badge bg-secondary mt-1">{post.tag}</span>
                  </div>
                </div>
                <button
                  className="btn btn-warning mt-2"
                  style={{ minWidth: 145, fontWeight: 500 }}
                  onClick={() => markAsUnread(post.id)}
                >
                  Đánh dấu chưa đọc
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
