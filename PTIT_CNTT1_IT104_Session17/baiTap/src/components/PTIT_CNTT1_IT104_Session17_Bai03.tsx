import React, { useState } from "react";

export default function PTIT_CNTT1_IT104_Session17_Bai03() {
  const [color, setColor] = useState<string>("black");
  const changeColor = () => {
    setColor("red");
  };
  return (
    <div>
      <div style={{ color: color, marginBottom: 10 }}>Tiêu đề văn bản</div>
      <button onClick={changeColor}>Thay đổi màu</button>
    </div>
  );
}
