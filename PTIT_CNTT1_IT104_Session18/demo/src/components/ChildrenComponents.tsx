import React, { memo } from "react";
import GrandChildrenComponents from "./GrandChildrenComponents";

type PropTypes = {
  count?: number;
  onCount?: () => void;
};

function ChildrenComponents({ count, onCount }: PropTypes) {
  return (
    <div>
      <h1>ChildrenComponents: {count}</h1>
      <button onClick={onCount}>Count</button>
      <GrandChildrenComponents />
    </div>
  );
}

// React memo dùng để ngăn không cho re-render khi không có gì thay đổi
export default memo(ChildrenComponents);
// === oldProps === newProps
// + Nếu giống nhau: => không re-render
// + Nếu khác nhau: => re-render lại component
