import { useState } from "react";
import ReactLogo from "../assets/react.svg";

function Header({ toggleSidebar, isOpen }) {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const logout = () => {
    console.log("Logout clicked");
  };

  return (
    <header
      className={`fixed right-0 top-0 z-[100] h-[60px] bg-white shadow-md transition-all duration-500 ${
        isOpen ? "left-[260px]" : "left-[78px]"
      }`}
    >
      <div className="flex items-center justify-between h-full px-4">

        {/* LEFT: Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1 cursor-pointer"
        >
          <span className="block w-6 h-[3px] bg-[#020143] rounded"></span>
          <span className="block w-6 h-[3px] bg-[#020143] rounded"></span>
          <span className="block w-6 h-[3px] bg-[#020143] rounded"></span>
        </button>

        {/* RIGHT: Profile */}
        <div className="flex items-center ml-auto">
          <div className="relative">

            <div
              className="flex items-center cursor-pointer"
              onClick={toggleDropdown}
            >
              <img
                src={ReactLogo}
                alt="Profile"
                className="w-[35px] h-[35px] rounded-full border-2 border-[#020143] ml-4 object-cover"
              />
            </div>

            {/* Dropdown */}
            <div
              className={`${
                open ? "block" : "hidden"
              } absolute right-0 mt-2 bg-white shadow-lg border border-[#020143] rounded-xl px-3 py-2 w-[180px] z-[100] text-center`}
            >
              <img
                src={ReactLogo}
                alt="React Logo"
                className="w-[80px] h-[80px] my-3 mx-auto rounded-full object-cover border-2 border-[#020143]"
              />

              <div className="text-[16px] font-medium text-[#020143] text-left ml-3">
                Welcome,
              </div>

              <div className="font-bold text-[#020143] text-center">
                Loading name...
              </div>

              <div className="h-[1px] bg-[#e0e0e0] my-2"></div>

              <div
                className="flex items-center justify-center gap-2 text-[#020143] font-medium py-2 rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={logout}
              >
                <span>Log Out</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;