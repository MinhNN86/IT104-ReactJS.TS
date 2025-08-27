import React, { useCallback, useState } from "react";
import ChildrenComponents from "./ChildrenComponents";
import DemoUseMemo from "./DemoUseMemo";

export default function ParentComponents() {
  const [count, setCount] = useState<number>(0);

  // useCallback
  // useCallback thường dùng và đi cùng với React.memo
  const handleCount = useCallback((): void => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <h1>ParentComponents</h1>
      <h1>Demo React.memo Count: {count}</h1>
      <h1>Demo useMemo</h1>
      <DemoUseMemo />
      <ChildrenComponents onCount={handleCount} />
    </div>
  );
}
