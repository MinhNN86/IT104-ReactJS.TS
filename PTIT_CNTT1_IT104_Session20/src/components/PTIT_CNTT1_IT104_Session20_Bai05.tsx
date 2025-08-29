import React, { useEffect, useState } from "react";

export default function PTIT_CNTT1_IT104_Session20_Bai05() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1>Bộ đếm thời gian: {count} giây</h1>
    </div>
  );
}
