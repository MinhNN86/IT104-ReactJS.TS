import React, { useEffect, useState } from "react";

export default function DemoUseEffect() {
  const [count, setCount] = useState<number>(0);
  const [title, setTitle] = useState<string>("");

  // Trường hợp 1
  useEffect(() => {
    console.log("Callback được gọi");
    // Thay tiêu đề trang
    document.title = title;
  });

  // Trường hợp 2: chỉ gọi callback 1 lần khi component chạy
  //  Hay được sử dụng để gọi API (lấy dữ liệu)
  useEffect(() => {
    console.log("Callback được gọi trường hợp 2");
  }, []);

  // Trường hợp 3: count thay đổi thì callback được gọi lại
  useEffect(() => {
    console.log("Callback được gọi là trường hợp 3");
  }, [count]);
  return (
    <>
      {console.log("Component mounted")}
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <h1>DemoUseEffect</h1>
    </>
  );
}
