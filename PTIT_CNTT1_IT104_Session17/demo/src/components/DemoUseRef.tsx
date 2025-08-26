import React, { useEffect, useRef, useState } from "react";

export default function DemoUseRef() {
  const headingRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const counterRef = useRef<number>(0);
  //   const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  const timerIdRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    inputRef.current?.focus(); // nếu khác null / undefined
  }, []);

  const handleCount = (): void => {
    counterRef.current++;
    // setCount((prev) => prev + 1);
  };

  const handleStart = (): void => {
    timerIdRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handleEnd = (): void => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
    }
  };
  return (
    <div>
      <h1 ref={headingRef}>Heading</h1>
      <input type="text" ref={inputRef} />

      <button onClick={handleCount}>Count</button>

      <hr />
      <h2>Time: {time}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleEnd}>End</button>
    </div>
  );
}
