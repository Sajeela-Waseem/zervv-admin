import React from "react";

export default function ProjectAssign() {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      {/* ===== HEADER ===== */}
      <header className="w-full bg-[#00303C] text-white text-center py-3">
        <h1 className="text-3xl font-bold uppercase tracking-wide">
          Project Assign
        </h1>
        <p className="text-gray-300 ">Assign and Manage Projects</p>
      </header>

      {/* ===== WHITE CONTENT CARD ===== */}
      <div className="bg-white w-full p-20 text-[#00303C]">
        {/* ===== DROPDOWNS SECTION ===== */}
        <div className="flex justify-center gap-4 mb-8">
          {/* Project Name */}
          <select className="border border-gray-300 text-[#00303C] px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1FE607] shadow-sm w-[230px]">
            <option>Project Name</option>
            <option>Website Redesign</option>
            <option>CRM Automation</option>
            <option>Marketing Dashboard</option>
          </select>

          {/* Member Name */}
          <select className="border border-gray-300 text-[#00303C] px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1FE607] shadow-sm w-[230px]">
            <option>Member Name</option>
            <option>Arslan Zubair</option>
            <option>Maryam Khan</option>
            <option>Ali Raza</option>
          </select>

          {/* Team Lead */}
          <select className="border border-gray-300 text-[#00303C] px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1FE607] shadow-sm w-[230px]">
            <option>Team Lead</option>
            <option>Gulraiz Arshad</option>
            <option>Sana Tariq</option>
            <option>Hassan Raza</option>
          </select>
        </div>

        {/* ===== ASSIGN BUTTON ===== */}
        <div className="flex justify-center">
          <button className="bg-[#1FE607] text-[#00303C] font-semibold px-8 py-2 rounded-md hover:bg-[#19c606] transition">
            Assign Project
          </button>
        </div>
      </div>
    </div>
  );
}
