import React, { useEffect, useState } from "react";

export default function DemoCleanupFuntion() {
  const [time, setTime] = useState<number>(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    //Clean up funtion
    return () => {
      //Viết logic để xử lý trước khi component bị unmount
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      console.log("Resize");
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <h1>DemoCleanupFuntion</h1>
      <h2>Time: {time}</h2>
    </div>
  );
}
