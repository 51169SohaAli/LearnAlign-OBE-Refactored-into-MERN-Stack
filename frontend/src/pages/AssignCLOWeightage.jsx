import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import AssignCLOWeightageTable from "../components/AssignCLOWeightageTable";


function AssignCLOWeightage() {
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
        <PageTitle title="Assign CLO Weightage" subtitle="Home / Courses / Assign CLO Weightage" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 p-5">
        <AssignCLOWeightageTable/>
        </div>
      </div>

    </div>
  );
}

export default AssignCLOWeightage;