import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/navbar.jsx";
import MembersDashboard from "./Pages/membersDashboard.jsx";
import ProjectAssign from "./Pages/projectAssign.jsx";
import ShiftScheduling from "./Pages/shiftScheduling.jsx";
import TeamManagment from "./Pages/teamManagment.jsx";
import ProjectDashboard from "./Pages/projectDashboard.jsx";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 ml-64  text-white min-h-screen">
          <Routes>
            {/* Redirect root URL to /members-dashboard */}
            <Route path="/" element={<Navigate to="/members-dashboard" />} />

            {/* All main routes */}
            <Route path="/members-dashboard" element={<MembersDashboard />} />
            <Route path="/project-assign" element={<ProjectAssign />} />
            <Route path="/shift-scheduling" element={<ShiftScheduling />} />
            <Route path="/team-management" element={<TeamManagment />} />
            <Route path="/project-dashboard" element={<ProjectDashboard/>}/>
  
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
