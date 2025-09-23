import { useAppDisPath, useAppSelector } from "../hooks/useCustomRedux";
import { changeViewMode } from "../slices/modeViewSlice";

export default function ViewMode() {
  const viewMode = useAppSelector((state) => state.viewMode.viewMode);
  const dispatch = useAppDisPath();
  const numbers: number[] = [1, 2, 3, 4];

  const handleChange = () => {
    dispatch(changeViewMode());
  };
  return (
    <div>
      <button
        onClick={handleChange}
        className={
          "px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 bg-white text-black border-2 border-black ml-20 mt-10"
        }
      >
        {viewMode === "list" ? "List Mode" : "Grid Mode"}
      </button>

      <div>
        <div
          className={`flex gap-2 mt-2 items-center w-[100vw] ${
            viewMode === "list" ? "flex-col" : ""
          }`}
        >
          {numbers.map((e) => (
            <div
              className="w-[30%] h-20 bg-red-500 flex justify-center items-center mx-10"
              key={e}
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
