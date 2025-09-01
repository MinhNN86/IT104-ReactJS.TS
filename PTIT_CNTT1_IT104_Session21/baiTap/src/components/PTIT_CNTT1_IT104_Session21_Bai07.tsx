import React from "react";

export default function PTIT_CNTT1_IT104_Session21_Bai07() {
  return (
    <div className="w-[520px] mx-auto mt-8 bg-white p-4 rounded">
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div
            key={i}
            className="bg-[#d946ef] text-white text-center rounded-md py-6 text-lg font-semibold tracking-wider"
            style={{ color: "rgb(255,255,255)" }}
          >
            0{i}
          </div>
        ))}
      </div>
    </div>
  );
}
