import React, { useState } from "react";

export default function PTIT_CNTT1_IT104_Session17_Bai07() {
  const [city, setCity] = useState("");

  const cities: string[] = [
    "Hà Nội",
    "Hà Nam",
    "Ninh Bình",
    "Thanh Hoá",
    "Nghệ An",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };
  return (
    <div>
      <div>Thành phố: {city}</div>
      <select value={city} onChange={handleChange}>
        <option value="">-- Chọn thành phố ---</option>
        {cities.map((c, idx) => (
          <option key={idx} value={c} style={{ color: "white" }}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
