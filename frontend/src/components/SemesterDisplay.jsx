function SemesterDisplay({ semesterName }) {
  return (
    <div className="w-full mx-auto mt-5 px-6 py-5 bg-[#F8F9FA] text-[#020143] border-l-4 border-r-4 border-[#020143] rounded-lg text-center text-base font-medium shadow-[0_-2px_10px_rgba(0,0,0,0.08),0_4px_10px_rgba(0,0,0,0.08)] transition-all duration-300 opacity-100 translate-y-0">
      
      <h3>Current Semester: {semesterName || "Not Set"} </h3>

    </div>
  );
}

export default SemesterDisplay;