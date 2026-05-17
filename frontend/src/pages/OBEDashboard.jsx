import { useState, useEffect} from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import SemesterDisplay from "../components/SemesterDisplay";
import AnalyticCards from "../components/AnalyticCards";



function OBEDashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [semesterName, setSemesterName ] = useState("N/A");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    const fetchSemester = async () =>{
      try{
        const res = await fetch("http://localhost:5000/api/semester/current");
        const data = await res.json();

        if(res.ok && data.semester){
          setSemesterName(data.semester);
        }else{
          setSemesterName("N/A");
        }
      }catch(err){
        console.log(err);
        setSemesterName("N/A");
      }
    };

    fetchSemester();
  },[]);


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
        <div className="mt-16 mb-10">
        <SemesterDisplay semesterName={semesterName} />
        </div>

        <div className="mt-5">
          <AnalyticCards />
        </div>
      </div>

    </div>
  );
}

export default OBEDashboard;

