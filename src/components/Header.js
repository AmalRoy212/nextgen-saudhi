import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = ({ logo }) => {
  const navItems = ["HOME", "ABOUT", "SPEAKERS", "INDUSTRY", "JOBS"];

  return (
    <header>
      <nav className="max-w-[1080px] mx-auto flex items-center justify-between xl:px-0 px-7 relative z-10">
        {/* Logo */}
        <a href="/" className="cursor-pointer py-7 pr-7">
          <img src={logo} className="w-[100px] md:w-[130px]" alt="UIC Logo" />
        </a>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-5 font-mullish text-white">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="font-semibold py-7 hover:text-[#928f96] cursor-pointer transition-all duration-200 relative group"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
              <div className="absolute bottom-5 w-full h-1 bg-deepBlue hidden group-hover:block transition-all duration-200"></div>
            </li>
          ))}
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
