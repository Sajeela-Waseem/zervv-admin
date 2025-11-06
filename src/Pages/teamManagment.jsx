import React, { useState } from "react";
import { FaPlus, FaSyncAlt, FaTrashAlt, FaTimes } from "react-icons/fa";

export default function TeamManagment() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="bg-white text-[#022C43] min-h-screen flex flex-col items-center">
      {/* ===== HEADER ===== */}
      <header className="w-full bg-[#00303C] text-white py-3 text-center shadow-md">
        <h1 className="text-3xl font-bold uppercase tracking-wide">
          Team Management
        </h1>
        <p className="text-gray-300">View and manage Team Members</p>
      </header>

      {/* ===== BUTTONS ===== */}
      <div className="flex flex-col gap-6 items-center justify-center flex-1">
        <button
          onClick={() => setActiveModal("insert")}
          className="flex items-center justify-center gap-3 w-64 bg-white text-[#022C43] font-bold px-10 py-3 rounded-md border border-[#022C43] hover:bg-[#1FE607] hover:text-[#022C43] transition"
        >
          <FaPlus /> Insert User
        </button>

        <button
          onClick={() => setActiveModal("update")}
          className="flex items-center justify-center gap-3 w-64 bg-white text-[#022C43] font-bold px-10 py-3 rounded-md border border-[#022C43] hover:bg-[#1FE607] hover:text-[#022C43] transition"
        >
          <FaSyncAlt /> Update User
        </button>

        <button
          onClick={() => setActiveModal("delete")}
          className="flex items-center justify-center gap-3 w-64 bg-white text-[#022C43] font-bold px-10 py-3 rounded-md border border-[#022C43] hover:bg-[#1FE607] hover:text-[#022C43] transition"
        >
          <FaTrashAlt /> Delete User
        </button>
      </div>

      {/* ===== MODAL ===== */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 transition-all duration-300">
          <div className="bg-white text-[#022C43] rounded-lg shadow-2xl w-[480px] p-8 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#022C43] transition"
            >
              <FaTimes size={18} />
            </button>

            {/* Modal Heading */}
            <h2 className="text-xl font-bold text-center mb-6 uppercase tracking-wide">
              {activeModal === "insert"
                ? "Insert User"
                : activeModal === "update"
                ? "Update User"
                : "Delete User"}
            </h2>

            {/* Modal Form */}
            <form className="flex flex-col gap-5 items-center">
              {activeModal === "insert" ? (
                // ===== Insert User Fields =====
                <div className="flex flex-col-2 gap-5 ">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1FE607]"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1FE607]"
                  />
                </div>
              ) : (
                // ===== Update/Delete User Dropdowns =====
                <div className="flex flex-col gap-5 w-full">
                  <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1FE607]">
                    <option>Select User</option>
                    <option>Arslan Zubair</option>
                    <option>Maryam Khan</option>
                    <option>Ali Raza</option>
                  </select>

                  {activeModal === "update" && (
                    <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1FE607]">
                      <option>Select New Role</option>
                      <option>Admin</option>
                      <option>Manager</option>
                      <option>Employee</option>
                    </select>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1FE607] text-[#022C43] font-bold py-2 rounded-md hover:bg-[#19c606] transition"
              >
                {activeModal === "insert"
                  ? "INSERT"
                  : activeModal === "update"
                  ? "UPDATE"
                  : "DELETE"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
