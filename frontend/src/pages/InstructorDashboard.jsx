import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import CourseCard from "../components/CourseCard"


function InstructorDashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [courses, setCourses] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

  const fetchCourses = async () => {

    try {

      const response = await axios.get("http://localhost:5000/api/courses");

      setCourses(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  fetchCourses();

}, []);

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
        {courses.map((course) => (

  <CourseCard
    key={course._id}
    code={course.course_code}
    name={course.course_name}
  />

))}
        </div>
      </div>

    </div>
  );
}

export default InstructorDashboard;