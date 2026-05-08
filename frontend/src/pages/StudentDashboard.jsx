import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import CourseCard from "../components/CourseCard"


function StudentDashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
        <PageTitle title="Dashboard" subtitle="Home / Dashboard" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 p-5">
        <CourseCard title="Introduction to Machine Learning" description="Course Code: CS3833" />
        </div>
      </div>

    </div>
  );
}

export default StudentDashboard;