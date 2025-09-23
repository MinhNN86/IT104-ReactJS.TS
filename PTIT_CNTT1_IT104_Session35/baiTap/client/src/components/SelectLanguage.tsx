import { useAppDisPath, useAppSelector } from "../hooks/useCustomRedux";
import { changeLanguage } from "../slices/languageSlice";

export default function SelectLanguage() {
  const language = useAppSelector((state) => state.language.language);
  const dispatch = useAppDisPath();
  console.log(language);

  const handleChange = () => {
    dispatch(changeLanguage());
  };

  return (
    <div className="m-10">
      <select
        name="language"
        id="language"
        className="border-2 w-45 h-10"
        value={language}
        onChange={handleChange}
      >
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>
      <div className="mt-10 text-2xl">
        {language === "vi" ? "Xin chào" : "Hello"}
      </div>
    </div>
  );
}
