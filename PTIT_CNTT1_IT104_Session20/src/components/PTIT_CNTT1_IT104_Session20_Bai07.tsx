import React, { useReducer } from "react";

type Action = {
  type: "INCREMENT" | "DECREMENT";
};

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default function PTIT_CNTT1_IT104_Session20_Bai07() {
  const [count, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>Số đếm: {count}</h1>
      <button style={{ marginRight: 50 }} onClick={handleIncrement}>
        Tăng
      </button>
      <button onClick={handleDecrement}>Giảm</button>
    </div>
  );
}
