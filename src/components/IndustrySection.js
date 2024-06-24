import { RiGovernmentFill } from 'react-icons/ri';
import { GiBank, GiMedicines, GiFactory, GiCargoShip } from 'react-icons/gi';
import { FaUserShield, FaShoppingCart, FaFilm, FaBolt, FaCity, FaPlane, FaTools, FaGraduationCap } from 'react-icons/fa';
import { IoStorefront } from 'react-icons/io5';
import { SiCoinmarketcap } from 'react-icons/si';
import { MdEmojiTransportation } from 'react-icons/md';
import HighlightText from "./HighlightText";

const industries = [
  { name: 'GOVERNMENT', icon: RiGovernmentFill },
  { name: 'BFSI', icon: GiBank },
  { name: 'INSURANCE', icon: FaUserShield },
  { name: 'HEALTHCARE & PHARMACEUTICALS', icon: GiMedicines },
  { name: 'FMCG/CPG', icon: FaShoppingCart },
  { name: 'MANUFACTURING', icon: GiFactory },
  { name: 'RETAIL', icon: IoStorefront },
  { name: 'E-COMMERCE', icon: SiCoinmarketcap },
  { name: 'MEDIA AND ENTERTAINMENT', icon: FaFilm },
  { name: 'ENERGY AND UTILITIES', icon: FaBolt },
  { name: 'REAL ESTATE & INFRASTRUCTURE', icon: FaCity },
  { name: 'TRANSPORTATION', icon: MdEmojiTransportation },
  { name: 'TOURISM AND HOSPITALITY', icon: FaPlane },
  { name: 'UTILITIES', icon: FaTools },
  { name: 'LOGISTICS', icon: GiCargoShip },
  { name: 'EDUCATION', icon: FaGraduationCap },
];

const IndustrySection = () => {
  return (
    <div className="bg-white max-w-[1150px] py-14 px-5 flex flex-col">

      <div className="flex flex-col gap-5 justify-center">
        <h1 className="lg:w-[100%] text-black text-center text-5xl font-mullish font-bold">
          WHO SHOULD <HighlightText text={" ATTEND ?"} />
        </h1>
        <div className="w-1/2 h-1 mt-1 bg-black mx-auto"></div>
      </div>

      <div className="flex gap-5 pt-14 items-center">
        <div className="h-16 w-1 mt-1 bg-deepBlue mx-auto"></div>
        <h1 className="w-full text-deepBlue font-mullish text-5xl font-semibold">
          BY INDUSTRY
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden bg-white px-6 pt-6 pb-4 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg"
          >
            <div className="flex flex-col items-center">
              <div className="pt-2 text-deepBlue text-7xl">
                <industry.icon />
              </div>
              <div className="pt-5 text-sm font-semibold leading-5 text-center">
                <p className="text-deepBlue">
                  {industry.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrySection;
