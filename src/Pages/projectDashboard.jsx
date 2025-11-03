import React from "react";

export default function ProjectDashboard() {
  const projects = [
    { id: "Project 1", name: "Data Entry", member: "Jalil", lead: "Yar Raza" },
    { id: "Project 2", name: "Data Entry", member: "Nimra", lead: "Yar Raza" },
    { id: "Project 3", name: "Data Entry", member: "Shoaib", lead: "Yar Raza" },
    { id: "Project 4", name: "Data Entry", member: "Fahad", lead: "Yar Raza" },
    { id: "Project 5", name: "Project 4", member: "Project 4", lead: "Project 4" },
    { id: "Project 6", name: "Project 4", member: "Project 4", lead: "Project 4" },
    { id: "Project 7", name: "Project 4", member: "Project 4", lead: "Project 4" },
    { id: "Project 8", name: "Project 4", member: "Project 4", lead: "Project 4" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* ===== HEADER ===== */}
      <header className="w-full bg-[#00303C] text-white text-center py-6">
        <h1 className="text-3xl font-bold uppercase tracking-wide">
          Project Dashboard
        </h1>
        <p className="text-gray-300 mt-2">Assign and Manage Projects</p>
      </header>

      {/* ===== WHITE CONTENT CARD ===== */}
      <div className="bg-white w-full p-10 text-[#00303C]">
        {/* ===== FILTERS ===== */}
        <div className="flex justify-center gap-4 mb-8">
          <select className="border border-gray-300 text-[#00303C] px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1FE607] shadow-sm w-[230px]">
            <option>Project Name</option>
            <option>Website Redesign</option>
            <option>CRM Automation</option>
            <option>Marketing Dashboard</option>
          </select>

          <select className="border border-gray-300 text-[#00303C] px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1FE607] shadow-sm w-[230px]">
            <option>Member Name</option>
            <option>Arslan Zubair</option>
            <option>Maryam Khan</option>
            <option>Ali Raza</option>
          </select>

          <select className="border border-gray-300 text-[#00303C] px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1FE607] shadow-sm w-[230px]">
            <option>Team Lead</option>
            <option>Gulraiz Arshad</option>
            <option>Sana Tariq</option>
            <option>Hassan Raza</option>
          </select>
        </div>

        {/* ===== TABLE ===== */}
        <div className="overflow-hidden rounded-lg">
          <table className="w-full border-collapse text-left">
            <thead className="bg-gray-100 border-b border-gray-300 text-[#00303C]">
              <tr>
                <th className="px-6 py-3 font-semibold">Projects</th>
                <th className="px-6 py-3 font-semibold">Project Name</th>
                <th className="px-6 py-3 font-semibold">Member Name</th>
                <th className="px-6 py-3 font-semibold">Team Lead</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((proj, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-3">{proj.id}</td>
                  <td className="px-6 py-3">{proj.name}</td>
                  <td className="px-6 py-3">{proj.member}</td>
                  <td className="px-6 py-3">{proj.lead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
