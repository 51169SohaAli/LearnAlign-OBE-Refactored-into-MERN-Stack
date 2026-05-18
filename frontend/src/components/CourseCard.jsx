import { useNavigate } from "react-router-dom";

function CourseCard({code, name}) {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/course-details/${code}`,{
        state: {
          courseName: name
        }
      });

    };
    
  return (
        <div 
        onClick={handleClick}
        className="bg-gradient-to-r from-white to-[#f1f3ff] border border-[#e1e1e1] rounded-2xl p-6 shadow-md cursor-pointer transition-transform duration-200 hover:-translate-y-1">

          <h3 className="mb-2 text-[#020143] text-xl font-semibold">
            {code}
          </h3>

          <p className="text-[#020143] text-base">
            {name}
          </p>

        </div>
  );
}

export default CourseCard;