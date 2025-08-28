import React, { useEffect, useState } from "react";

export default function PTIT_CNTT1_IT104_Session19_Bai06() {
  const [key, setKey] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKey(e.key.toUpperCase());
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      console.log("clearUp function");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h2>Phím bạn vừa nhấn:</h2>
      <h1>{key ? key : "..."}</h1>
    </div>
  );
}
