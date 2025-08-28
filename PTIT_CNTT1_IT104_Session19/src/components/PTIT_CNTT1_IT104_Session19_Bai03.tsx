import React, { useRef, useState } from "react";

export default function PTIT_CNTT1_IT104_Session19_Bai03() {
  const [value, setValue] = useState("");
  const renderCount = useRef(0);
  renderCount.current += 1;
  return (
    <div>
      <h1>Component Render Counter</h1>
      Input: <input type="text" onChange={(e) => setValue(e.target.value)} />
      <div>Component đã render: {renderCount.current} lần</div>
    </div>
  );
}
