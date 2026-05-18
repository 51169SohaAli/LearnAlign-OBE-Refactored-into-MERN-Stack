import { Link } from "react-router-dom";

function CourseDetailsBox({ courseCode, courseName, cloCount,
  /*assessmentCount ,*/ studentCount }) {

  return (

    <div className="max-w-[900px] mx-auto mt-[40px] p-[30px] bg-white border-2 border-[#020143] rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.08)]">

      <h2 className="text-[#020143] text-2xl font-semibold mb-[10px]">
        Course: {courseName}
      </h2>

      <p className="text-lg text-[#020143]">
        Course Code: {courseCode}
      </p>

      <div className="flex justify-between gap-4 mt-[30px]">

        <div className="bg-[#e4eaff] p-[20px] rounded-xl flex-1 text-center transition duration-300 hover:bg-[#d2dcfd] hover:-translate-y-[3px]">
          <h3 className="text-xl text-[#020143]">
            CLOs
          </h3>

          <p className="mt-[5px] text-[28px] font-bold text-[#333]">
            {cloCount}
          </p>
        </div>

        <div className="bg-[#e4eaff] p-[20px] rounded-xl flex-1 text-center transition duration-300 hover:bg-[#d2dcfd] hover:-translate-y-[3px]">
          <h3 className="text-xl text-[#020143]">
            Assessments
          </h3>

          <p className="mt-[5px] text-[28px] font-bold text-[#333]">
            0
          </p>
        </div>

        <div className="bg-[#e4eaff] p-[20px] rounded-xl flex-1 text-center transition duration-300 hover:bg-[#d2dcfd] hover:-translate-y-[3px]">
          <h3 className="text-xl text-[#020143]">
            Students
          </h3>

          <p className="mt-[5px] text-[28px] font-bold text-[#333]">
            {studentCount}
          </p>
        </div>

      </div>

      <Link
        to="/instructor-dashboard"
        className="inline-block mt-[30px] bg-[#020143] text-white px-[18px] py-[10px] rounded-lg no-underline transition duration-200 hover:bg-[#141466]"
      >
        ← Back to Dashboard
      </Link>

    </div>
  );
}

export default CourseDetailsBox;