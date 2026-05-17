import { useEffect, useState } from "react";
import axios from "axios";

function CourseOBE(){
    const [showModal, setShowModal] = useState(false);
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [clos, setClos] = useState([]);

    useEffect(() =>{

        const fetchCourses = async () =>{
            try{
                const response = await axios.get("http://localhost:5000/api/courses");

                setCourses(response.data);
            }catch(error){
                console.log(error);
            }
        };

        fetchCourses();
    },[]);


const handleViewCLO = async (course) => {

    setSelectedCourse(course);

    try {

        const response = await axios.get(
            `http://localhost:5000/api/clos/course/${course._id}`
        );

        setClos(response.data);

        setShowModal(true);

    } catch (error) {
        console.log(error);
    }
};

    return (
        <div className="overflow-x-auto">

            <table className="w-full border-collapse mt-4 shadow-md rounded-lg overflow-hidden">

                <thead>
                    <tr className="bg-[#020143]">

                        <th className="p-3 text-center text-[0.95rem] font-medium text-white border-b-2 border-[#dee2e8]">
                            Course Code
                        </th>

                        <th className="p-3 text-center text-[0.95rem] font-medium text-white border-b-2 border-[#dee2e8]">
                            Course Title
                        </th>

                        <th className="p-3 text-center text-[0.95rem] font-medium text-white border-b-2 border-[#dee2e8]">
                            Credits
                        </th>

                        <th className="p-3 text-center text-[0.95rem] font-medium text-white border-b-2 border-[#dee2e8]">
                            CLO
                        </th>

                    </tr>
                </thead>

                <tbody>

                    {courses.map((course) =>(
                        <tr key={course._id} className="border-b  border-[#bec1c7] hover:bg-[#f4f6f8] transition">

                            <td className="p-3 text-center text-[#020143] font-medium">{course.course_code}</td>

                            <td className="p-3 text-center text-[#020143] font-medium">{course.course_name}</td>

                            <td className="p-3 text-center text-[#020143] font-medium">{course.credit_hours}</td>

                            <td className="p-3 text-center text-[#020143] font-medium">
                              <button
                                className="px-6 py-2 bg-[#020143] text-white rounded-lg cursor-pointer hover:bg-[#04026e] transition"
                                 onClick={() => handleViewCLO(course)}
                                    >
                                                 View
                                    </button>
                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>
            {showModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[200]">

    <div className="bg-white w-[500px] rounded-2xl shadow-xl p-6 relative">

      <button
  className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-black"
  onClick={() => setShowModal(false)}
>
  ×
</button>

      <h2 className="text-2xl font-bold text-[#020143] mb-4">
        Course Learning Outcomes
      </h2>

      <div className="space-y-3">

        <div>
          <span className="font-semibold text-[#020143]">
            Course:
          </span>{" "}
          {selectedCourse?.course_name}
        </div>

        <div>
          <span className="font-semibold text-[#020143]">
            Course Code:
          </span>{" "}
          {selectedCourse?.course_code}
        </div>

        <div className="mt-4">

          <div className="font-semibold text-[#020143] mb-2">
            CLOs
          </div>

          <table className="w-full border-collapse mt-4 shadow-md rounded-lg overflow-hidden">

<thead>
  <tr>
  <th className="p-3 text-center bg-[#020143] text-[0.95rem] font-medium text-white border-b-2 border-[#dee2e8]">
                            CLO Code
                        </th>
  <th className="p-3 text-center bg-[#020143] text-[0.95rem] font-medium text-white border-b-2 border-[#dee2e8]">
                           CLO Description
                        </th>
                        </tr>

</thead>
<tbody>
            {clos.map((clo) => (
  <tr key={clo._id} className="border-b  border-[#bec1c7] hover:bg-[#f4f6f8] transition">
    <td className="p-3 text-center text-[#020143] font-medium border-[#bec1c7] border-r-2">
    <span className="font-semibold">
      {clo.code}
    </span>{" "}
    </td>
    <td className="p-3 text-center text-[#020143] font-medium border-[#bec1c7] border-r-2">
    {clo.description}
    </td>
  </tr>
))}
  </tbody>

          </table>

        </div>

      </div>

    </div>

  </div>
)}

        </div>
    );

}

export default CourseOBE;
