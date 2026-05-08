import {useState} from "react";

function ProcessBox(){
    const [step, setStep] = useState(1);
    const [semesterName, setSemesterName] = useState("");
    const [courseFile, setCourseFile] = useState(null);
    const [enrollmentFile, setEnrollmentFile] = useState(null);
    console.log(semesterName);

    const handleCourseUpload = async () => {
  if (!courseFile) return alert("Select a file first");

  const formData = new FormData();
  formData.append("file", courseFile);
  formData.append("semesterId", localStorage.getItem("semesterId"));

  try {
    const res = await fetch("http://localhost:5000/api/upload/courses", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    console.log("Upload response:", data);

  } catch (err) {
    console.log(err);
  }
};

const handleEnrollmentUpload = async () => {
  if (!enrollmentFile) return alert("Select a file first");

  const formData = new FormData();
  formData.append("file", enrollmentFile);
  formData.append("semesterId", localStorage.getItem("semesterId"));

  try {
    const res = await fetch("http://localhost:5000/api/upload/enrollments", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    console.log("Enrollment upload response:", data);

  } catch (err) {
    console.log("Error:", err);
  }
};

    return(
        <div className="max-w-xl mx-auto translate-x-16 bg-white border border-[#020143] rounded-xl shadow-md overflow-hidden">

            <div className="bg-[#020143] text-white text-center py-3 font-medium">
            {step === 1 && "Step 1: Create New Semester"}
            {step === 2 && "Step 2: Upload Course and Instructor Assignments"}
            {step === 3 && "Step 3: Upload Student Enrollments"}
            </div>


            <div className="p-5">
                {step === 1 && (
                    <>
                    <label className="block font-medium mb-2">
                        Semester:
                    </label>
                    <input 
                    type="text"
                    value={semesterName}
                    onChange={(e) => setSemesterName(e.target.value)}
                    placeholder="Enter semester name (e.g, Fall 2026"
                    className="w-full p-2  border border-[#020143] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a2a72]">
                    </input>
                    <button
                    onClick={ async() => {
                        try{
                            const res = await fetch("http://localhost:5000/api/semester", {
                                method: "POST",
                                headers: {
                                    "Content-Type" : "application/json"
                                },
                                body: JSON.stringify({
                                    name: semesterName
                                })

                        });
                        const data = await res.json();
                        console.log("Backend response: ", data);
                        
                        const name = data?.semester?.name;

                        if (name) {
                        localStorage.setItem("semesterName", name);
                            }
                            localStorage.setItem("semesterId", data.semester._id);
                        setStep(2);
                        }catch (err){
                            console.log("Error: ", err);
                        }
                    }}
                    className="w-full mt-4 bg-[#020143] cursor-pointer text-white py-2 rounded-md hover:bg-[#4141b3] transition">
                        Next
                    </button>
                    </>
                )}

                 {step === 2 && (
                    <>
                    <label className="inline-block bg-[#020143] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#4141b3] transition mb-4">
                    Choose File
                    <input type="file" className="hidden" 
                    onChange={(e) => setCourseFile(e.target.files[0])}/>
                    </label>
                    <div className="flex gap-2">
                        <button
                    onClick={() => setStep(1)}
                    className="bg-[#020143] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-[#4141b3] transition">
                       Back
                    </button>

                    <button
                    onClick={handleCourseUpload}
                    className="bg-[#020143] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-[#4141b3] transition">
                        Upload
                    </button>

                    <button
                    onClick={() => setStep(3)}
                    className="bg-[#020143] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-[#4141b3] transition">
                        Next
                    </button>

                    </div>
                    
                    </>
                )}

                 {step === 3 && (
                    <>
                    <label className="inline-block bg-[#020143] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#4141b3] transition mb-4">
                    Choose File
                    <input type="file" className="hidden"
                    onChange={(e) => setEnrollmentFile(e.target.files[0])} />
                    </label>
                    <div className="flex gap-2">
                        <button
                    onClick={() => setStep(2)}
                    className="bg-[#020143] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-[#4141b3] transition">
                       Back
                    </button>

                    <button
                    onClick={handleEnrollmentUpload}
                    className="bg-[#020143] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-[#4141b3] transition">
                        Upload
                    </button>


                    </div>
                    
                    </>
                )}

            </div>
        </div>
       

    );
}
export default ProcessBox;


