import { useAppDisPath, useAppSelector } from "../hooks/useCustomRedux";
import { decrease, increase, reset } from "../slices/counterSlice";

export default function Counter() {
  const value = useAppSelector((state) => state.counter);
  const dispatch = useAppDisPath();

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Counter: {value}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
