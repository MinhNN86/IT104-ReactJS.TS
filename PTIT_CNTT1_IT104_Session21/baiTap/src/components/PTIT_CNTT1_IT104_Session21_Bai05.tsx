import React from "react";

export default function PTIT_CNTT1_IT104_Session21_Bai05() {
  return (
    <div className="p-4 bg-[#f0f7fc] rounded-md w-[340px] mx-auto">
      <div className="relative bg-sky-100 rounded-md p-6 min-h-[120px]">
        <div className="text-sky-900 mb-7">Relative parent</div>
        <div
          className="
      absolute left-4 bottom-4
      bg-sky-400 text-white font-semibold rounded-md
      px-4 py-2 shadow
      "
        >
          Absolute child
        </div>
      </div>
    </div>
  );
}
