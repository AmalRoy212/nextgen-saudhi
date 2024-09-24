import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import UIClogo from "../assets/images/UICLOGOIMAGE.png";

const Header = () => {
  // const navItems = ["HOME", "ABOUT", "INDUSTRY", "JOBS"];
  const navItems = ["HOME", "ABOUT", "PARTNERS"];
  // const navItems = ["HOME", "ABOUT", "SPEAKERS", "PARTNERS"];
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/nextgen-event/register-form");
  };

  return (
    <header>
     
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between xl:px-0 px-7 relative z-10">

        {/* Logo */}
        <Link to="https://utrechtitconsulting.com" className="cursor-pointer py-7 pr-7">
          <img src={UIClogo} className="w-[100px] md:w-[130px]" alt="UIC Logo" />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-5 font-mullish text-white items-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="font-semibold py-7 hover:text-[#928f96] cursor-pointer transition-all duration-200 relative group"
            >
              <a className="text-sm font-mullish font-thin" href={`#${item.toLowerCase()}`}>{item}</a>
              <div className="absolute bottom-5 w-full h-1 bg-[#928f96] hidden group-hover:block transition-all duration-200"></div>
            </li>
          ))}
          <button
            onClick={handleRegisterClick}
            className="py-2 px-4 bg-blue-500 text-white font-thin rounded hover:bg-blue-700 transition-all duration-200"
          >
            REGISTER
          </button>
        </ul>

        {/* Responsive Menu Icon */}
        <div className="sm:hidden block">
          <FontAwesomeIcon icon={faBars} className="text-[30px] text-white" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
