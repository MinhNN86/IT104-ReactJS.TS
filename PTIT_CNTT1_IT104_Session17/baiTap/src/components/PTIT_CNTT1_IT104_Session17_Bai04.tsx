import React, { useState } from "react";

export default function PTIT_CNTT1_IT104_Session17_Bai04() {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleClick = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <div>
      <button onClick={handleClick}>{isShow ? "Ẩn" : "Hiện"}</button>
      {isShow && <div>Tiêu đề văn bản</div>}
    </div>
  );
}
