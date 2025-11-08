import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/navbar.jsx";
import MembersDashboard from "./Pages/membersDashboard.jsx";
import ProjectAssign from "./Pages/projectAssign.jsx";
import ShiftScheduling from "./Pages/shiftScheduling.jsx";
import TeamManagment from "./Pages/teamManagment.jsx";
import ProjectDashboard from "./Pages/projectDashboard.jsx";
import Login from "./Pages/login.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") setIsAuthenticated(true);
  }, []);

  return (
    <Router>
      {isAuthenticated ? (
        <div className="flex min-h-screen">
          <Navbar />
          <main className="flex-1 ml-64 text-white min-h-screen">
            <Routes>
              <Route path="/" element={<Navigate to="/members-dashboard" />} />
              <Route path="/members-dashboard" element={<MembersDashboard />} />
              <Route path="/project-assign" element={<ProjectAssign />} />
              <Route path="/shift-scheduling" element={<ShiftScheduling />} />
              <Route path="/team-management" element={<TeamManagment />} />
              <Route path="/project-dashboard" element={<ProjectDashboard />} />
            </Routes>
          </main>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login onLogin={setIsAuthenticated} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
