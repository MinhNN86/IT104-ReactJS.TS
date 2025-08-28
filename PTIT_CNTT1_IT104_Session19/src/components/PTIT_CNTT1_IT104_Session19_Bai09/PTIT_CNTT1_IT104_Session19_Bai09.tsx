import React from "react";
import { useLanguage } from "./LanguageContext";

export default function PTIT_CNTT1_IT104_Session19_Bai09() {
  const { language, changeLanguage } = useLanguage();

  const texts = {
    en: { lable: "English", message: "Welcome!" },
    vi: { lable: "Tiếng Việt", message: "Xin chào!" },
  };
  return (
    <div>
      <div>
        🌐 Ngôn ngữ hiện tại:
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="vi">Tiếng Việt</option>
        </select>
      </div>
      <div>{texts[language].message}</div>
    </div>
  );
}
