import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import CourseOBE from "../components/CourseOBE";
import CourseInstructor from "../components/CourseInstructor";

function Courses() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const role = localStorage.getItem("role");



  return (
    <div className="min-h-screen bg-[#F8F9FA]">

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} />

      {/* Header */}
      <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />

      {/* Page Content */}
     <div
        className={`pt-[80px] px-6 transition-all duration-500 ${
          isOpen ? "ml-[260px]" : "ml-[78px]"
        }`}
      >
        {/* Page Title Section */}
        <PageTitle title="Courses" subtitle="Home / Courses" />
        {role === "obe" && <CourseOBE />}
        {role === "instructor" && <CourseInstructor/>}

      </div>

    </div>
  );
}

export default Courses;