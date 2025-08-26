import React, { useState } from "react";

export default function PTIT_CNTT1_IT104_Session17_Bai05() {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="Nhập nội dung" onChange={handleChange} />
      <div>{input}</div>
    </div>
  );
}
