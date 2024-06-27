import HighlightText from './HighlightText'; 
import governmentIconImage from '../assets/images/GovernmentIcon.png';
import bankIconImage from '../assets/images/bankIconImage.png';
import insuranceIconImage from '../assets/images/insuranceIcon.webp';
import healthIconImage from '../assets/images/HealthIcon.png';
import fmcgIconImage from '../assets/images/fmcgIcon.webp';
import manufacturingIconImage from '../assets/images/manufacturingIcon.webp';
import retailIconImage from '../assets/images/realEstateIcon.png';
import ecommerceIconImage from '../assets/images/ecommerceIcon.webp';
import mediaIconImage from '../assets/images/mediaIcon.png';
import energyIconImage from '../assets/images/energyIcon.webp';
import realEstateIconImage from '../assets/images/realEstateIcon.png';
import transportationIconImage from '../assets/images/transportationIcon.png';
import tourismIconImage from '../assets/images/toursimIcon.webp';
import utilitiesIconImage from '../assets/images/utilitiesIcon.png';
import logisticsIconImage from '../assets/images/logisticsIcon.png';
import educationIconImage from '../assets/images/educationIcon.webp';

const industries = [
  { name: 'GOVERNMENT', icon: governmentIconImage },
  { name: 'BFSI', icon: bankIconImage },
  { name: 'INSURANCE', icon: insuranceIconImage },
  { name: 'HEALTHCARE & PHARMACEUTICALS', icon: healthIconImage },
  { name: 'FMCG/CPG', icon: fmcgIconImage },
  { name: 'MANUFACTURING', icon: manufacturingIconImage },
  { name: 'RETAIL', icon: retailIconImage },
  { name: 'E-COMMERCE', icon: ecommerceIconImage },
  { name: 'MEDIA AND ENTERTAINMENT', icon: mediaIconImage },
  { name: 'ENERGY AND UTILITIES', icon: energyIconImage },
  { name: 'REAL ESTATE & INFRASTRUCTURE', icon: realEstateIconImage },
  { name: 'TRANSPORTATION', icon: transportationIconImage },
  { name: 'TOURISM AND HOSPITALITY', icon: tourismIconImage },
  { name: 'UTILITIES', icon: utilitiesIconImage },
  { name: 'LOGISTICS', icon: logisticsIconImage },
  { name: 'EDUCATION', icon: educationIconImage },
];

const IndustrySection = () => {
  return (
    <div className="bg-white max-w-[1150px] py-14 px-8 flex flex-col"> {/* Adjusted padding */}

      <div className="flex flex-col gap-6 justify-center"> {/* Adjusted gap */}
        <h1 className="lg:w-[100%] text-black text-center text-5xl font-mullish font-bold">
          WHO SHOULD <HighlightText text=" ATTEND ?" />
        </h1>
        <div className="w-1/2 h-1 mt-1 bg-black mx-auto"></div>
      </div>

      <div className="flex gap-5 pt-12 items-center"> {/* Adjusted padding */}
        <div className="h-16 w-1 bg-deepBlue mx-auto"></div>
        <h1 className="w-full text-deepBlue font-mullish text-5xl font-semibold">
          BY INDUSTRY
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10"> {/* Adjusted grid gap and margin */}
        {industries.map((industry, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden bg-white px-6 pt-6 pb-4 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg"
          >
            <div className="flex flex-col items-center">
              <div className="pt-2 text-deepBlue text-5xl"> {/* Further reduced icon size */}
                <img src={industry.icon} alt={industry.name} className="h-12 w-12" style={{ filter: 'invert(0%)' }} /> {/* Made icon color black */}
              </div>
              <div className="pt-6 text-lg font-semibold leading-5 text-center"> {/* Increased text size and adjusted padding */}
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
