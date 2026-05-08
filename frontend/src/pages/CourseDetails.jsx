import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import CourseDetailsBox from "../components/CourseDetailsBox";

function CourseDetails() {
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
        <PageTitle title="Course Details" subtitle="Home / Dashboard / Course Details" />
        <CourseDetailsBox />


      </div>

    </div>
  );
}

export default CourseDetails;