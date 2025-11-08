import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@zhub.com" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");
      onLogin(true);
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#00303C] text-[#022C43]">
      <div className="bg-white rounded-lg shadow-2xl p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#00303C]">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1FE607]"
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1FE607]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1FE607] text-[#00303C] font-bold py-2 rounded-md hover:bg-[#18c406] transition"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
