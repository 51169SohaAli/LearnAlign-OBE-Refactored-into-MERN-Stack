import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API_URL from "../../config/api";


function AssignCLOWeightageTable(){
    const [course, setCourse] = useState(null);
    const [clos, setClos] = useState([]);
    const { courseCode } = useParams();

    const totalWeightage =  clos.reduce(
      (sum, clo) => sum + Number(clo.weightage || 0),
      0
    );

   useEffect(() => {

  const fetchCourse = async () => {
    try {

      const response = await axios.get(
        `${API_URL}/api/courses/code/${courseCode}`
      );

      setCourse(response.data);

    } catch(error) {
      console.log(error);
    }
  };

  fetchCourse();

}, [courseCode]);

useEffect(() => {

  if (!course) return;

  const fetchCLOs = async () => {
    try {

      const response = await axios.get(
        `${API_URL}/api/clos/course/${course._id}`
      );

      setClos(response.data);

    } catch(error) {
      console.log(error);
    }
  };

  fetchCLOs();

}, [course]);

const handleWeightageChange = (cloId, value) => {

  setClos((prevClos)=>
  prevClos.map((clo)=>
  clo._id === cloId
   ? { ...clo, weightage: value}
   : clo
  )
);
};

const handleSaveWeightages = async () =>{
  try{
    await axios.put(
      `${API_URL}/api/clos/weightages`,
      {clos}
    );
    alert("Weightages saved sucessfully");
  }catch(error){
    console.log(error);
  }

};

    return (
         <div className="space-y-3">

        <div>
          <span className="font-semibold text-[#020143]">
            Course:
          </span>{" "}
          {course?.course_name}
        </div>

        <div>
          <span className="font-semibold text-[#020143]">
            Course Code:
          </span>{" "}
          {course?.course_code}
        </div>

        <div className="mt-4">

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-[#020143]">
                Total CLO Weightage
              </span>

              <span className="font-semibold">
                {totalWeightage}%
              </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="h-4 rounded-full transition-all duration-300"
              style={{
                width: `${Math.min(totalWeightage, 100)}%`,
                backgroundColor:
                totalWeightage === 100
                ? "#16a34a"
                : totalWeightage > 100
                ? "#dc2626"
                : "#2563eb"
              }}
              />
  
            </div>
          </div>
          <div className="mt-2 font-medium">
            {totalWeightage < 100 && (
              <span className="text-blue-600">
                Remaining Weightage: {100 - totalWeightage}% 
              </span>
            )}

            {totalWeightage === 100 && (
              <span className="text-green-600">
                Weightage distribution is complete.
              </span>
            )}

            {totalWeightage > 100 && (
              <span className="text-red-600">
                Exceeded by {totalWeightage - 100}%.
              </span>
            )}

          </div>

          <div className="font-semibold text-[#020143] mb-2 mt-5">
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
  <th className="p-3 text-center bg-[#020143] text-[0.95rem] font-medium text-white border-b-2 border-[#dee2e8]">
                            Weightage
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
    <td className="p-3 text-center text-[#020143] font-medium">
  <input
    type="number"
    value={clo.weightage || ""}
    onChange={(e) =>
      handleWeightageChange(clo._id, e.target.value)
    }
    className="w-20 border rounded px-2 py-1 text-center"
  />
</td>
  </tr>
))}
  </tbody>

          </table>

          <div className="flex justify-end mt-4">
            <button 
            disabled={totalWeightage !== 100}
            onClick={handleSaveWeightages}
            className={`px-6 py-2 bg-[#020143] text-white rounded-lg cursor-pointer ${
              totalWeightage === 100
              ? "bg-[#020143]"
              : "bg-gray-400 cursor-not-allowed"
            }`}>
              Save Weightages
            </button>
          </div>

        </div>

      </div>         

    );

}

export default AssignCLOWeightageTable;
