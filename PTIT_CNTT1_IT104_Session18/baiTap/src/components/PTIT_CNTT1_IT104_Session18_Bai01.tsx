import React, { useReducer } from "react";
type Action = { type: "increment"; payload?: number };

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
};

const initialState = 0;

export default function PTIT_CNTT1_IT104_Session18_Bai01() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
    </div>
  );
}
