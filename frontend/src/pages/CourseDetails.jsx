import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import CourseDetailsBox from "../components/CourseDetailsBox";
import API_URL from "../config/api";

function CourseDetails() {
  const [isOpen, setIsOpen] = useState(true);
  const { courseCode} = useParams();
  const [course, setCourse] = useState(null);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

  const fetchCourse = async () => {

    try {

      const res = await fetch(
        `${API_URL}/api/courses/${courseCode}`
      );

      const data = await res.json();

      if (res.ok) {
        setCourse(data);
      }

    } catch (error) {
      console.log(error);
    }

  };

  fetchCourse();

}, [courseCode]);

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
        <CourseDetailsBox
  courseCode={course?.course_code}
  courseName={course?.course_name}
  cloCount={course?.cloCount}
  /*assessmentCount={course?.assessmentCount}*/
  studentCount={course?.studentCount}
/>


      </div>

    </div>
  );
}

export default CourseDetails;