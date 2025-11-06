import React from "react";

export default function ShiftScheduling() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* ===== HEADER ===== */}
      <header className="w-full bg-[#00303C] text-white text-center py-3">
        <h1 className="text-3xl font-bold uppercase tracking-wide">
          Shift Scheduling
        </h1>
        <p className="text-gray-300">
          View and manage Members Shift Scheduling
        </p>
      </header>

      {/* ===== WHITE CONTENT CARD ===== */}
      <div className="bg-white w-full rounded-lg border border-gray-200 p-10">
        {/* ===== MEMBER SELECT ===== */}
        <div className="flex mb-10">
          <select className="border border-gray-300 text-[#00303C] px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1FE607] shadow-sm w-[250px]">
            <option>Member Name</option>
            <option>Arslan Zubair</option>
            <option>Maryam Khan</option>
            <option>Ali Raza</option>
          </select>
        </div>

        {/* ===== TABLE HEADING ===== */}
        <div className="flex gap-3 mb-4 text-[#00303C] font-semibold">
          <span className="w-[120px]">Day</span>
          <span className="w-[150px]">Start</span>
          <span className="w-[40px]"></span>
          <span className="w-[150px] text-center">End</span>
        </div>

        {/* ===== SCHEDULE TABLE ===== */}
        <div className="space-y-6 mb-10">
          {days.map((day, i) => (
            <div key={i} className="flex gap-3">
              {/* Day name */}
              <span className="w-[120px] text-[#00303C] font-medium">
                {day}
              </span>

              {/* Start time */}
              <input
                type="text"
                placeholder="Start time"
                className="border border-gray-300 rounded-md px-4 py-2 text-[#00303C] w-[150px] text-center focus:outline-none focus:ring-2 focus:ring-[#1FE607]"
              />

              {/* Plus icon */}
              <button className="flex items-center justify-center w-7 h-7 rounded-md bg-black text-white hover:bg-[#1FE607] hover:text-[#00303C] transition">
                <span className="text-lg font-bold">+</span>
              </button>

              {/* End time */}
              <input
                type="text"
                placeholder="End time"
                className="border border-gray-300 rounded-md px-4 py-2 text-[#00303C] w-[150px] text-center focus:outline-none focus:ring-2 focus:ring-[#1FE607]"
              />
            </div>
          ))}
        </div>

        {/* ===== SINGLE SAVE BUTTON (BOTTOM RIGHT) ===== */}
        <div className="flex justify-end">
          <button className="bg-[#1FE607] text-[#00303C] font-semibold px-10 py-3 rounded-md hover:bg-[#19c606] transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
