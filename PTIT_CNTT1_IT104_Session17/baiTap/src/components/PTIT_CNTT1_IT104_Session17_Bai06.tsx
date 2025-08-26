import React, { useState } from "react";

export default function PTIT_CNTT1_IT104_Session17_Bai06() {
  const [count, setCount] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
  };
  return (
    <div>
      <textarea onChange={handleChange}></textarea>
      <div>Số ký tự: {count}</div>
    </div>
  );
}
