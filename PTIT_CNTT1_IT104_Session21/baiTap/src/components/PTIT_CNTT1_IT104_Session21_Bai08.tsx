import React from "react";

export default function PTIT_CNTT1_IT104_Session21_Bai08() {
  return (
    <div>
      <div className="flex gap-3 m-10 bg-slate-300">
        {[1, 2, 3].map((i) => (
          <div className="p-5 bg-blue-500 rounded-md text-white font-medium">
            0{i}
          </div>
        ))}
      </div>
      <div className="flex gap-3 m-10 justify-end bg-slate-300">
        {[1, 2, 3].map((i) => (
          <div className="p-5 bg-blue-500 rounded-md text-white font-medium">
            0{i}
          </div>
        ))}
      </div>
      <div className="flex gap-3 m-10 justify-center bg-slate-300">
        {[1, 2, 3].map((i) => (
          <div className="p-5 bg-blue-500 rounded-md text-white font-medium">
            0{i}
          </div>
        ))}
      </div>
      <div className="flex gap-3 m-10 justify-between bg-slate-300">
        {[1, 2, 3].map((i) => (
          <div className="p-5 bg-blue-500 rounded-md text-white font-medium">
            0{i}
          </div>
        ))}
      </div>
      <div className="flex gap-3 m-10 justify-around bg-slate-300">
        {[1, 2, 3].map((i) => (
          <div className="p-5 bg-blue-500 rounded-md text-white font-medium">
            0{i}
          </div>
        ))}
      </div>
      <div className="flex gap-3 m-10 justify-evenly bg-slate-300">
        {[1, 2, 3].map((i) => (
          <div className="p-5 bg-blue-500 rounded-md text-white font-medium">
            0{i}
          </div>
        ))}
      </div>
    </div>
  );
}
