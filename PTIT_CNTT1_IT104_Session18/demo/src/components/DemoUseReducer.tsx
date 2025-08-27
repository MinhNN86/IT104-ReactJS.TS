import React, { useReducer, useState } from "react";

// Định nghĩa kiểu cho action: gồm 4 loại hành động có thể thực hiện
// payload chỉ dùng khi random để truyền giá trị ngẫu nhiên
type ActionTypes = {
  type: "increase" | "decrease" | "random" | "reset";
  payload?: number;
};

// Giá trị ban đầu của state là 0
const initialState = 0;

// reducer: hàm xử lý state dựa trên action
// state: giá trị hiện tại
// action: hành động mà người dùng gửi vào (dispatch)
const reducer = (state: number, action: ActionTypes) => {
  switch (action.type) {
    case "increase":
      // tăng state thêm 1
      return (state += 1);
    case "decrease":
      // giảm state đi 1
      return (state -= 1);
    case "random":
      // nếu có payload thì gán state = payload, nếu không thì giữ nguyên
      return action.payload ? action.payload : state;
    case "reset":
      // reset state về 0
      return 0;
    default:
      return state;
  }
};

export default function DemoUseReducer() {
  // Nếu dùng useState thì viết như thế này:
  // const [count, setCount] = useState<number>(0);

  // useReducer: quản lý state theo reducer
  // count: giá trị state hiện tại
  // dispatch: hàm gửi action vào reducer
  const [count, dispatch] = useReducer(reducer, initialState);

  // Hàm xử lý khi click nút Increase
  const handleIncrease = (): void => {
    dispatch({ type: "increase" });
  };

  // Hàm xử lý khi click nút Decrease
  const handleDecrease = (): void => {
    dispatch({ type: "decrease" });
  };

  // Hàm xử lý khi click nút Random
  const handleRandom = (): void => {
    // random số từ 1 → 100 rồi dispatch action random với payload
    dispatch({ type: "random", payload: Math.ceil(Math.random() * 100) });
  };

  // Hàm xử lý khi click nút Reset
  const handleReset = (): void => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      {/* Hiển thị giá trị count */}
      <h2>Count: {count}</h2>

      {/* Các button tương ứng với action */}
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleRandom}>Random</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
