import React, { useState } from "react";

export default function PTIT_CNTT1_IT104_Session17_Bai01() {
  const [name, setName] = useState("Nguyễn Văn A");
  return (
    <div>
      <h1>Họ và tên: {name}</h1>
    </div>
  );
}
