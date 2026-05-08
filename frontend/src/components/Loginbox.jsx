import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginbox() {
  const navigate = useNavigate();
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [studentData, setStudentData] = useState({
  student_id: "",
  password: ""
});

const [instructorData, setInstructorData] = useState({
  instructor_id: "",
  password: ""
});

const handleStudentLogin = async (e) => {
  e.preventDefault();

  try{
    const res = await fetch ("http://localhost:5000/login/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      credentials: "include",
      body: JSON.stringify(studentData)
    });
    const data = await res.json();
    console.log(data);

    if (res.ok){
      alert("Student login successful!");
      localStorage.setItem("role", data.role);
      navigate("/student-dashboard");
    }else{
      alert("Login failed.");
    }
  } catch (error){
    console.log(error);
  }
};

const handleInstructorLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/login/instructor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(instructorData)
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      localStorage.setItem("role", data.role);
      if(data.role == "obe") {
        alert("OBE incharge login successful")
        navigate("/obe-dashboard");
      }else{
      alert("Instructor login successful");
      navigate("/instructor-dashboard");
      }
    } else {
      alert("Login failed");
    }

  } catch (error) {
    console.log(error);
  }
};


  return(
    <div
  className={`relative w-212.5 h-150 bg-white shadow-[25px_30px_55px_rgba(85,85,85,0.47)] rounded-[13px] overflow-hidden mx-auto mt-7 ${
    rightPanelActive ? "right-panel-active" : ""
  }`}
>
        <div className="sign-in-container absolute w-[60%] h-full px-10 transition-all duration-700 ease-in-out z-2">
           <form onSubmit={handleStudentLogin} className="flex flex-col h-full items-center justify-center px-0 py-12.5">
                <h1 className="text-2xl font-medium text-transparent bg-clip-text bg-linear-to-r from-[#00308f] to-[#00008b]">Student Login</h1>
                
              <div className="relative my-3 w-full">
  <input
    type="text"
    placeholder="Username"
    id="student_id"
    name="student_id"
    required
    className="w-full bg-gray-100 px-3 py-3 outline-none border-b-2 border-transparent focus:border-blue-500 transition-all duration-300"
    onChange={(e) => 
      setStudentData({ ...studentData, student_id: e.target.value })
    }
  />
</div>

<div className="relative my-3 w-full">
  <input
    type="password"
    placeholder="Password"
    id="password"
    name="password"
    required
    className="w-full bg-gray-100 px-3 py-3 outline-none border-b-2 border-transparent focus:border-blue-500 transition-all duration-300"
    onChange={(e) => 
      setStudentData({ ...studentData, password: e.target.value })
    }
  />
</div>
                <button 
                type="submit"
                id="student_id"
                className="rounded-[20px] border border-[#00308f] bg-linear-to-r from-[#00308f] to-[#00008b] text-white text-[12px] font-bold px-11.25 py-3 tracking-[1px] uppercase hover:opacity-90 transition-opacity">Login</button>
            </form>
        </div>
        <div className="sign-up-container absolute left-0 w-[60%] h-full px-10 transition-all duration-700 ease-in-out opacity-0 z-1">
           <form onSubmit={handleInstructorLogin} className="flex flex-col h-full items-center justify-center px-0 py-12.5">
                <h1 className="text-2xl font-medium text-transparent bg-clip-text bg-linear-to-r from-[#00308f] to-[#00008b]">Instructor Login</h1>
                
              <div className="relative my-3 w-full">
  <input
    type="text"
    placeholder="Username"
    id="instructor_id"
    name="instructor_id"
    required
    className="w-full bg-gray-100 px-3 py-3 outline-none border-b-2 border-transparent focus:border-blue-500 transition-all duration-300"
    onChange={(e) => 
      setInstructorData({ ...instructorData,instructor_id: e.target.value })
    }
  />
</div>

<div className="relative my-3 w-full">
  <input
    type="password"
    placeholder="Password"
    id="password"
    name="password"
    required
    className="w-full bg-gray-100 px-3 py-3 outline-none border-b-2 border-transparent focus:border-blue-500 transition-all duration-300"
    onChange={(e) => 
      setInstructorData({ ...instructorData, password: e.target.value })
    }
  />
</div>
                <button 
                id="instructor_id"
                type="submit"
                className="rounded-[20px] border border-[#00308f] bg-linear-to-r from-[#00308f] to-[#00008b] text-white text-[12px] font-bold px-11.25 py-3 tracking-[1px] uppercase hover:opacity-90 transition-opacity">Login</button>
            </form>
        </div>

        <div id="overlayCon" className="absolute top-0 left-[60%] w-[40%] h-full overflow-hidden transition-transform duration-600 ease-in-out z-9">

  <div className="overlay relative bg-linear-to-r from-[#00308f] to-[#00008b] text-white left-[-150%] h-full w-[250%] transition-transform duration-600 ease-in-out">

    {/* LEFT PANEL */}
    <div className="overlay-panel overlay-left absolute flex items-center justify-center flex-col px-10 text-center h-full w-85 right-[60%] translate-x-[-12%] transition-all duration-600 ease-in-out">
      <h4 className="text-white -mt-19 text-xl font-medium ml-10">Welcome!</h4>

      <p className="text-[14px] font-light leading-5 tracking-[0.5px] my-9 ml-10">
        Click on the button below to login as an Student
      </p>

      <button className="border border-white bg-transparent rounded-[20px] px-8.75 py-2.5 hover:bg-white hover:text-[#00308f] transition-all ml-10">
        Student
      </button>
    </div>


    {/* RIGHT PANEL */}
    <div className="overlay-panel overlay-right absolute flex items-center justify-center flex-col px-10 text-center h-full w-85 right-0 translate-x-0 transition-all duration-600 ease-in-out">
      <h4 className="text-white -mt-19 text-xl font-medium">Welcome!</h4>

      <p className="text-[14px] font-light leading-5 tracking-[0.5px] my-6.25">
        Click on the button below to login as a Instructor
      </p>

      <button className="border border-white bg-transparent rounded-[20px] px-8.75 py-2.5 hover:bg-white hover:text-[#00308f] transition-all">
        Instructor
      </button>
    </div>

  </div>

  {/* Overlay Button */}
  <button
    id="overlayBtn"
    className="absolute left-1/2 top-76 -translate-x-1/2 w-[143.67px] h-10 bor cursor-pointer"
  type="button"
  onClick={() => setRightPanelActive(!rightPanelActive)}
></button>

</div>
        </div>

      


  );
}

export default Loginbox;