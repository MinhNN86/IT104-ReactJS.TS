import { useAppSelector, useAppDisPath } from "../hooks/useCustomRedux";
import { changeTheme } from "../slices/themeSlice";

export default function Themes() {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDisPath();

  console.log(theme);

  const handleToggleTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <div
      className={`min-h-[100vh] flex flex-col justify-center items-center transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-8">Theme Switcher</h1>

        <div
          className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
            theme === "dark"
              ? "bg-gray-800 border border-gray-700"
              : "bg-gray-50 border border-gray-200"
          }`}
        >
          <p className="text-lg mb-4">
            Current theme:{" "}
            <span className="font-semibold capitalize">{theme}</span>
          </p>

          <button
            onClick={handleToggleTheme}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
              theme === "dark"
                ? "bg-blue-600 hover:bg-blue-700 text-white border border-blue-500"
                : "bg-blue-500 hover:bg-blue-600 text-white border border-blue-400"
            }`}
          >
            {theme === "dark" ? "🌞 Switch to Light" : "🌙 Switch to Dark"}
          </button>
        </div>
      </div>
    </div>
  );
}
