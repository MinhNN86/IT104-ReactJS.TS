import React, { useEffect } from "react";

export default function PTIT_CNTT1_IT104_Session20_Bai03() {
  useEffect(() => {
    console.log("Component đã Welcome được render lần đầu!");
  }, []);
  return (
    <div>
      <h1>Chào mừng bận đến với ứng dụng của chúng tôi</h1>
    </div>
  );
}
