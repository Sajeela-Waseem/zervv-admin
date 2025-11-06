import React, { useState } from "react";
import { Search } from "lucide-react"; 

export default function ProjectDashboard() {
  const allProjects = [
    { id: "Project 1", name: "Data Entry", member: "Jalil", lead: "Yar Raza" },
    { id: "Project 2", name: "Data Entry", member: "Nimra", lead: "Yar Raza" },
    { id: "Project 3", name: "Data Entry", member: "Shoaib", lead: "Yar Raza" },
    { id: "Project 4", name: "Data Entry", member: "Fahad", lead: "Yar Raza" },
    { id: "Project 5", name: "Project 4", member: "Adeel", lead: "Hassan Raza" },
    { id: "Project 6", name: "Project 4", member: "Ali", lead: "Sana Tariq" },
    { id: "Project 7", name: "Project 4", member: "Maryam", lead: "Gulraiz Arshad" },
    { id: "Project 8", name: "Project 4", member: "Zubair", lead: "Hassan Raza" },
  ];

  const [projects, setProjects] = useState(allProjects);
  const [searchTerm, setSearchTerm] = useState("");

  // ====== SEARCH HANDLER ======
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = allProjects.filter(
      (proj) =>
        proj.id.toLowerCase().includes(term) ||
        proj.name.toLowerCase().includes(term) ||
        proj.member.toLowerCase().includes(term) ||
        proj.lead.toLowerCase().includes(term)
    );
    setProjects(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* ===== HEADER ===== */}
      <header className="w-full bg-[#00303C] text-white text-center py-3">
        <h1 className="text-3xl font-bold uppercase tracking-wide">
          Project Dashboard
        </h1>
        <p className="text-gray-300">Assign and Manage Projects</p>
      </header>

      {/* ===== WHITE CONTENT CARD ===== */}
      <div className="bg-white w-full p-10 text-[#00303C]">
        {/* ===== SEARCH BAR ===== */}
      

        {/* ===== FILTER DROPDOWNS ===== */}
       
        <div className="flex justify-between  mb-8 flex-wrap">
          <div className="flex justify-center gap-4  flex-wrap">
   <select className="border border-gray-300 text-[#00303C] px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1FE607] shadow-sm w-[200px]">
            <option>Project Name</option>
            <option>Website Redesign</option>
            <option>CRM Automation</option>
            <option>Marketing Dashboard</option>
          </select>

          <select className="border border-gray-300 text-[#00303C] px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1FE607] shadow-sm w-[200px]">
            <option>Member Name</option>
            <option>Arslan Zubair</option>
            <option>Maryam Khan</option>
            <option>Ali Raza</option>
          </select>

          <select className="border border-gray-300 text-[#00303C] px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#1FE607] shadow-sm w-[200px]">
            <option>Team Lead</option>
            <option>Gulraiz Arshad</option>
            <option>Sana Tariq</option>
            <option>Hassan Raza</option>
          </select>
          </div>
     
          <div className="relative ">
  {/* Search Icon */}
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

  {/* Search Input */}
  <input
    type="text"
    placeholder="Search projects, members, or team leads..."
    value={searchTerm}
    onChange={handleSearch}
    className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1FE607] shadow-sm"
  />
</div>

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
              {projects.length > 0 ? (
                projects.map((proj, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-3">{proj.id}</td>
                    <td className="px-6 py-3">{proj.name}</td>
                    <td className="px-6 py-3">{proj.member}</td>
                    <td className="px-6 py-3">{proj.lead}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No matching results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
