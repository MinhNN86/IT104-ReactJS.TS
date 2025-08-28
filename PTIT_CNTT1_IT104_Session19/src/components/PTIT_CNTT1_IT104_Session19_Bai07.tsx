import React, { useRef } from "react";

export default function PTIT_CNTT1_IT104_Session19_Bai07() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Hàm cuộn mượt tới section
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div style={{ minHeight: "120vh", background: "#f5f5f9" }}>
      {/* Phần đầu trang */}
      <div
        style={{
          background: "#0094ff",
          padding: "48px 0 32px 0",
          textAlign: "center",
          borderRadius: 16,
          margin: "32px auto 0 auto",
          maxWidth: 500,
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: 40,
            marginBottom: 28,
          }}
        >
          <span
            role="img"
            aria-label="compass"
            style={{ marginRight: 10, fontSize: 36 }}
          >
            🧭
          </span>
          Cuộn tới nội dung
        </h1>
        <button
          onClick={handleScroll}
          style={{
            fontSize: 17,
            fontWeight: 600,
            padding: "10px 28px",
            borderRadius: 8,
            border: "1.5px solid #0094ff",
            background: "#fff",
            color: "#0094ff",
            boxShadow: "0 2px 8px #0001",
            cursor: "pointer",
            transition: ".2s",
          }}
        >
          Đi tới phần nội dung
        </button>
      </div>

      {/* Nội dung giả lập phía trên để có thể cuộn */}
      <div
        style={{
          maxWidth: 600,
          margin: "48px auto 0 auto",
          background: "#f4f4f4",
          borderRadius: 12,
          padding: "36px 32px",
          color: "#555",
          fontSize: 18,
          minHeight: 200,
          lineHeight: 1.7,
        }}
      >
        Đây là nội dung giả lập để tạo khoảng cách cho trang… <br />
        <br />
        Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài.
        <br />
        <br />
        Cuộn trang sẽ mượt mà hơn khi có nhiều nội dung.
      </div>

      {/* Section mục tiêu */}
      <div
        ref={sectionRef}
        style={{
          maxWidth: 600,
          margin: "80px auto 0 auto",
          background: "#fff",
          borderRadius: 16,
          padding: "48px 32px",
          textAlign: "center",
          boxShadow: "0 2px 16px #0002",
          fontSize: 22,
          color: "#2b3a5b",
          fontWeight: 600,
        }}
      >
        👉 Đây là PHẦN NỘI DUNG mục tiêu!
        <br />
        Bạn đã cuộn tới đây thành công 🎉
      </div>
    </div>
  );
}
