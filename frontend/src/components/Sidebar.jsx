import ReactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {  
  const role = localStorage.getItem("role");

  let links = [];

  if (role === "instructor"){
    links = [
    { name: "Dashboard", href: "/instructor-dashboard", icon: "bx bx-grid-alt" },
    { name: "Courses", href: "/courses", icon: "bx bx-book-alt" },
    { name: "Assessments", href: "/assessments", icon: "bx bx-list-check" },
    { name: "Progress Report", href: "/progress-report", icon: "bx bx-line-chart" },
  ];
  }

   if (role === "student"){
    links = [
    { name: "Dashboard", href: "/student-dashboard", icon: "bx bx-grid-alt" },
    { name: "Progress Report", href: "/progress-report", icon: "bx bx-line-chart" },
  ];
  }

   if (role === "obe"){
    links = [
    { name: "Dashboard", href: "/obe-dashboard", icon: "bx bx-grid-alt" },
    { name: "Initiate OBE Process", href: "/initiate-obeprocess", icon: "bx bx-bullseye" },
    { name: "Courses", href: "/courses", icon: "bx bx-book-alt" },
  ];
  }


  

  return (
    <div
      className={`fixed top-0 left-0 h-full z-[100] bg-[#020143] transition-all duration-500 ${
        isOpen ? "w-[260px]" : "w-[78px]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center h-[60px] w-full px-4">
        <img src={ReactLogo} alt="logo" className="h-[30px] min-w-[30px]" />
        <span
          className={`ml-2 text-white text-lg font-light transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          LearnAlign
        </span>
      </div>

      {/* Links */}
      <ul className="flex flex-col pt-4">
        {links.map((link, idx) => (
          <li
            key={idx}
            className="group relative hover:bg-[#6c71ba]"
          >
            <Link
              to={link.href}
              className="flex items-center px-4 py-3 text-white"
            >
              <i className={`${link.icon} text-xl min-w-[50px] text-center`}></i>

              <span
                className={`transition-opacity duration-300 ${
                  isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                {link.name}
              </span>
            </Link>

            {/* Tooltip when sidebar is closed */}
            {!isOpen && (
              <span className="absolute left-[85px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#020143] px-3 py-1 text-sm font-medium text-white opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100">
                {link.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;