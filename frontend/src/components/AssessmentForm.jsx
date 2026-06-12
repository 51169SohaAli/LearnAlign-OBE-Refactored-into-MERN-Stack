import {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AssessmentForm(){
    const [step, setStep] = useState(1);
    const [numberOfQuestions, setNumberOfQuestions] = useState("");
    const [questions, setQuestions] = useState([]);
    const [course, setCourse] = useState(null);
    const [assessmentName, setAssessmentName] = useState("");
    const [assessmentType, setAssessmentType] = useState("");
    const [weightage, setWeightage] = useState("");

     const { courseCode } = useParams();

    useEffect(() => {

  const fetchCourse = async () => {
    try {

      const response = await axios.get(
        `http://localhost:5000/api/courses/code/${courseCode}`
      );

      setCourse(response.data);

    } catch(error) {
      console.log(error);
    }
  };

  fetchCourse();

}, [courseCode]);

const handleCreateAssessment = async () => {
  try{
    const response = await axios.post(
      "http://localhost:5000/api/assessments",
      {
        courseId: course._id,
        assessmentName,
        assessmentType,
        weightage,
      }
    );

    console.log(response.data);

    setStep(2);
  }catch(error){
    console.log(error);
  }
};

const handleGenerateQuestions = (e) => {

  const value = e.target.value;

  setNumberOfQuestions(value);

  const generateQuestions = [];

  for(let i =1; i <= Number(value); i++){
    generateQuestions.push({
      questionNumber: i,
      cloId: "",
      weightage: ""
    });
  }

  setQuestions(generateQuestions);
};


    return(

        <div className="max-w-xl mx-auto translate-x-16">

   <div className="mb-3 px-1 flex gap-8 text-[#020143]">
  <div>
    <span className="font-semibold">Course:</span>{" "}
    {course?.course_name}
  </div>

  <div>
    <span className="font-semibold">Course Code:</span>{" "}
    {course?.course_code}
  </div>
</div>

    <div className="bg-white border border-[#020143] rounded-xl shadow-md overflow-hidden">

            <div className="bg-[#020143] text-white text-center py-3 font-medium">
            {step === 1 && "Step 1: Assessment Information"}
            {step === 2 && "Step 2: Question Mapping"}
            </div>


            <div className="p-5">
                {step === 1 && (
                    <>

                    <label className="block font-medium mb-2">
                      Assessment Name:
                    </label>

                    <input
                    type="text"
                    value={assessmentName}
                     onChange={(e) => setAssessmentName(e.target.value)}
                     className="w-full p-2 border border-[#020143] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a2a72]"
                        />

                    <label className="block font-medium mb-2">
                        Assessment Type:
                    </label>
                    <select
  value={assessmentType}
  onChange={(e) => setAssessmentType(e.target.value)}
  className="w-full p-2 border border-[#020143] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a2a72]"
>
  <option value="">Select Assessment Type</option>
  <option value="Quiz">Quiz</option>
  <option value="Assignment">Assignment</option>
  <option value="Project">Project</option>
  <option value="Lab">Lab</option>
  <option value="Midterm">Midterm</option>
  <option value="Final">Final</option>
</select>
                    <label className="block font-medium mt-4 mb-2">
                        Weightage:
                    </label>
                    <input 
                    type="number"
                    value={weightage}
                    onChange={(e) => setWeightage(e.target.value)}
                    className="w-full p-2  border border-[#020143] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a2a72]">
                    </input>
                    <button
                    onClick={handleCreateAssessment}
                    className="w-full mt-4 bg-[#020143] cursor-pointer text-white py-2 rounded-md hover:bg-[#4141b3] transition">
                        Next
                    </button>
                    </>
                )}

                 {step === 2 && (
                    <>
                    <label className="block font-medium mb-2">
                    Number of Questions:
                    </label>
                    <input 
                    value = {numberOfQuestions}
                    onChange={handleGenerateQuestions}
                    type="number" 
                    placeholder="Enter number of questions" 
                    className="w-full p-2 mb-4 border border-[#020143] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a2a72]"
                    ></input>
                    {questions.length > 0 && (
                      <table className="w-full border-collapse mt-4 shadow-md rounded-lg overflow-hidden">

    <thead>
      <tr className="bg-[#020143]">

        <th className="p-3 text-center text-[0.95rem] font-medium text-white border-b-2 border-[#dee2e8]">
          Question
        </th>

        <th className="p-3 text-center text-[0.95rem] font-medium text-white border-b-2 border-[#dee2e8]">
          CLO
        </th>

        <th className="p-3 text-center text-[0.95rem] font-medium text-white border-b-2 border-[#dee2e8]">
          Weightage
        </th>

      </tr>
    </thead>

    <tbody>

      {questions.map((question) => (
        <tr
          key={question.questionNumber}
          className="border-b border-[#bec1c7] hover:bg-[#f4f6f8] transition"
        >

          <td className="p-3 text-center text-[#020143] font-medium">
            Question {question.questionNumber}:
          </td>

          <td className="p-3 text-center text-[#020143] font-medium">
            CLO Dropdown:
            <select
  className="w-full p-2 border border-[#020143] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a2a72]"
>
  <option value="">Select CLO</option>
  <option value="CLO 1">CLO 1</option>
  <option value="CLO 2">CLO 2</option>
</select>
          </td>

          <td className="p-3 text-center text-[#020143] font-medium">
            Weightage Input:
            <input 
                    type="number" 
                    placeholder="Enter weightage" 
                    className="w-full p-2 mb-4 border border-[#020143] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a2a72]"
                    ></input>
          </td>

        </tr>
      ))}

    </tbody>

  </table>
)}
                    <div className="flex gap-2 mt-4">
                        <button
                    onClick={() => setStep(1)}
                    className="bg-[#020143] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-[#4141b3] transition">
                       Back
                    </button>

                    <button
                    className="bg-[#020143] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-[#4141b3] transition">
                       Save
                    </button>

                    <button
                    className="bg-[#020143] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-[#4141b3] transition">
                       Add New Assessment
                    </button>

                    </div>
                    
                    </>
                )}

            </div>
        </div>
        </div>
       

    );
}
export default AssessmentForm;


