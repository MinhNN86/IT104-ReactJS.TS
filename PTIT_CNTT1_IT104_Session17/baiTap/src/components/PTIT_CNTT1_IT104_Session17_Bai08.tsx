import React, { useState } from "react";

export default function PTIT_CNTT1_IT104_Session17_Bai08() {
  const option: string[] = ["Di chơi", "Code", "Bơi lội", "Nhảy dây"];
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
  return (
    <div>
      <div>Sở thích: {JSON.stringify(selected)}</div>
      {option.map((opt) => (
        <label
          key={opt}
          style={{ display: "block", marginBottom: 6, cursor: "pointer" }}
        >
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => handleToggle(opt)}
            style={{ marginRight: 8 }}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}
