import { useDispatch } from "react-redux";
import { increase } from "../slices/counterSlice";
import { useAppSelector } from "../hooks/useCustomeRedux";

export default function Counter() {
  // Lấy dữ liệu từ Store
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useDispatch();
  // Truyền hành động từ component lên reducer để xử lý

  const handleIncrease = () => {
    dispatch(increase());
  };

  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
