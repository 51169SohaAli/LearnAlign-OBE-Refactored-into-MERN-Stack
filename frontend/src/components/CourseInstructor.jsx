import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CourseInstructor(){

    const [courses, setCourses] = useState([]);
    const instructorId = localStorage.getItem("userId");
    const navigate = useNavigate();

    useEffect(() =>{

        const fetchCourses = async () =>{
            try{
                const response = await axios.get(`http://localhost:5000/api/courses/instructor/${instructorId}`);

                setCourses(response.data);
            }catch(error){
                console.log(error);
            }
        };

        fetchCourses();
    },[]);

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
                            Action
                        </th>

                    </tr>
                </thead>

                <tbody>

                    {courses.map((course) =>(
                        <tr key={course._id} className="border-b  border-[#bec1c7] hover:bg-[#f4f6f8] transition">

                            <td className="p-3 text-center text-[#020143] font-medium">{course.course_code}</td>

                            <td className="p-3 text-center text-[#020143] font-medium">{course.course_name}</td>

                            <td className="p-3 text-center text-[#020143] font-medium">
                              <button 
                              className=" px-6 py-2 bg-[#020143] text-white rounded-lg cursor-pointer"
                              onClick={() => navigate(`/assignclo-weightage/${course.course_code}`)}
                              >Assign CLO Weightage</button> 
                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );

}

export default CourseInstructor
