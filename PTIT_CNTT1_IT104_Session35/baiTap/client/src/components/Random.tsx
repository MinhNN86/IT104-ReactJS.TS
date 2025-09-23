import { useAppDisPath, useAppSelector } from "../hooks/useCustomRedux";
import { random } from "../slices/randomSlice";

export default function Random() {
  const numbers = useAppSelector((state) => state.random);
  const dispatch = useAppDisPath();

  const handleRandom = () => {
    dispatch(random());
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">
        List number: [{numbers.join(", ")}]
      </h2>
      <button onClick={handleRandom}>Random number</button>
    </div>
  );
}
