import { useState, useEffect, useRef } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

// Tạo ra đoạn văn bản lorem*1000 để đảm bảo đủ dài
const loremText = Array(1000)
  .fill(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar, neque vitae dictum tempus, leo tortor porta sapien, nec rhoncus sapien. "
  )
  .join("");

const PAGE_SIZE = 4000;

export default function LazyLoadComp() {
  const [visibleLength, setVisibleLength] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, clientHeight, scrollHeight } = containerRef.current;

      console.log("Scroll event:", {
        scrollTop,
        clientHeight,
        scrollHeight,
        visibleLength,
        loading,
      });

      if (scrollTop + clientHeight >= scrollHeight - 50 && !loading) {
        console.log("Triggering load more...");
        if (visibleLength < loremText.length) {
          setLoading(true);
          setTimeout(() => {
            setVisibleLength((prev) => {
              const newLength = Math.min(prev + PAGE_SIZE, loremText.length);
              console.log("New visible length:", newLength);
              return newLength;
            });
            setLoading(false);
          }, 1000);
        }
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [loading, visibleLength]);

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          height: 700,
          overflow: "auto",
          background: "#222",
          color: "#fff",
          padding: 24,
          borderRadius: 10,
          position: "relative",
          border: "2px solid #555",
        }}
      >
        <div style={{ fontSize: 16, lineHeight: 1.7 }}>
          {loremText.slice(0, visibleLength)}
        </div>
        {loading && (
          <div style={{ textAlign: "center", margin: "24px 0" }}>
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 36 }} spin />}
              style={{ background: "#8888", padding: 16, borderRadius: 8 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
