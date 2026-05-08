function CourseDetailsBox(){
    return(
    <div className="max-w-[900px] mx-auto mt-[40px] p-[30px] bg-white border-2 border-[#020143] rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.08)]">
        <h2 className="text-[#020143] mb-[10px]">Course'</h2>
        <p className="mx-[5px] text-xl font-normal text-[#020143]">Course Code:</p>

        <div className="flex justify-between mt-[30px]">
            <div className="bg-[#e4eaff] p-[20px] rounded-xl w-[30%] text-center transition duration-300 hover:bg-[#d2dcfd] hover:-translate-y-[3px]">
                <h3 className="text-xl text-[#020143]">CLOs</h3>
                <p className="mt-[5px] text-[28px] font-bold text-[#333]"></p>
            <div className="bg-[#e4eaff] p-[20px] rounded-xl w-[30%] text-center transition duration-300 hover:bg-[#d2dcfd] hover:-translate-y-[3px]">
                <h3 className="text-xl text-[#020143]">Assessments</h3>
                <p className="mt-[5px] text-[28px] font-bold text-[#333]"></p>
            </div>
            <div className="bg-[#e4eaff] p-[20px] rounded-xl w-[30%] text-center transition duration-300 hover:bg-[#d2dcfd] hover:-translate-y-[3px]">
                <h3 className="text-xl text-[#020143]">Students</h3>
                <p className="mt-[5px] text-[28px] font-bold text-[#333]"></p>
            </div>
        </div>

        <a href="InstructorDashboard.jsx" className="inline-block mt-[30px] bg-[#020143] text-white px-[18px] py-[10px] rounded-lg no-underline transition duration-200 hover:bg-[#141466]">← Back to Dashboard</a>
    </div>
    </div>

    );
}
export default CourseDetailsBox;
