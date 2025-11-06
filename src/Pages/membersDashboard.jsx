import React from "react";

export default function MembersDashboard() {
  return (
    <div className="bg-white text-[#022C43] min-h-screen flex flex-col items-center">
      {/* Main Content */}
    
        {/* ===== Header ===== */}
       <header className="w-full bg-[#00303C] text-white py-3 text-center shadow-md">
        <h1 className="text-3xl font-bold uppercase tracking-wide">
         Memebers Dashboard
        </h1>
        <p className="text-gray-300">View and manage Team Members</p>
      </header>


        {/* ===== White Card Container ===== */}
        <div className="bg-white rounded-lg shadow-xl w-full mx-auto py-10 px-8 border border-gray-200">
          {/* --- Filters --- */}
          <div className="flex justify-center gap-4 mb-10">
            <select className="bg-white border border-gray-300 text-[#00303C] px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1FE607] shadow-sm">
              <option>Member Name</option>
              <option>Arslan Zubair</option>
              <option>Maryam Khan</option>
              <option>Ali Raza</option>
            </select>

            <button className="flex items-center gap-2 bg-white border border-gray-300 text-[#00303C] px-6 py-3 rounded-md font-medium shadow-sm hover:bg-gray-50">
              <span className="text-xl">📅</span> Date
            </button>
          </div>

          {/* --- Table --- */}
          <div className="overflow-hidden rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1FE607] text-[#00303C]">
                <tr>
                  <th className="px-6 py-3 font-semibold">Project 1</th>
                  <th className="px-6 py-3 font-semibold">Project 2</th>
                  <th className="px-6 py-3 font-semibold">Project 3</th>
                  <th className="px-6 py-3 font-semibold">Project 4</th>
                  <th className="px-6 py-3 font-semibold">Project 5</th>
                  <th className="px-6 py-3 font-semibold">
                    Total Working Hours
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-200 hover:bg-gray-100 transition duration-150"
                  >
                    <td className="px-6 py-3 text-gray-700">Text</td>
                    <td className="px-6 py-3 text-gray-700">Text</td>
                    <td className="px-6 py-3 text-gray-700">Text</td>
                    <td className="px-6 py-3 text-gray-700">Text</td>
                    <td className="px-6 py-3 text-gray-700">Text</td>
                    <td className="px-6 py-3 text-gray-700">4 hours 30 min</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* --- Pagination --- */}
          <div className="flex justify-center items-center mt-8 text-[#00303C] font-medium">
            <button className="px-3 py-1 rounded hover:bg-[#1FE607] hover:text-[#00303C] transition">
              Previous
            </button>

            <div className="flex gap-2 mx-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`px-3 py-1 rounded transition ${
                    n === 1
                      ? "bg-[#1FE607] text-[#00303C] font-semibold"
                      : "hover:bg-[#1FE607] hover:text-[#00303C]"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            <button className="px-3 py-1 rounded hover:bg-[#1FE607] hover:text-[#00303C] transition">
              Next
            </button>
          </div>
        </div>
      
    </div>
  );
}
