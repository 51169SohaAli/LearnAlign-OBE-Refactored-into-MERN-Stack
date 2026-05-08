import { Routes, Route } from "react-router-dom";
import Loginbox from "./components/Loginbox";
import InstructorDashboard from "./pages/InstructorDashboard";
import Courses from "./pages/Courses";
import Assessments from "./pages/Assessments";
import ProgressReport from "./pages/ProgressReport";
import StudentDashboard from "./pages/StudentDashboard";
import OBEDashboard from "./pages/OBEDashboard";
import InitiateOBEProcess from "./pages/InitiateOBEProcess";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className={`min-h-screen w-full ${isLoginPage ? "bg-[#1b33ac]" : "bg-gray-100"}`}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex items-center justify-center min-h-screen">
              <Loginbox />
            </div>
          }
        />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/obe-dashboard" element={<OBEDashboard />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/progress-report" element={<ProgressReport />} />
        <Route path="/initiate-obeprocess" element={<InitiateOBEProcess />} />
      </Routes>
    </div>
  );
}

export default App;