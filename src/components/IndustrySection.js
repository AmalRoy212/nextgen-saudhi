import governmentIconImage from '../assets/images/GovernmentUIC.svg';
import bankIconImage from '../assets/images/BankUIC.svg';
import insuranceIconImage from '../assets/images/InsuranceUIC.svg';
import ecommerceIconImage from '../assets/images/EcommerceUIC.svg';
import telecomIconImage from '../assets/images/TelecomUIC.svg';
import oilGasIconImage from '../assets/images/OilAndGasUIC.svg';
import retailIconImage from '../assets/images/RetailUIC.svg';
import healthcareIconImage from '../assets/images/HealthCareUIC.svg';
import miningIconImage from '../assets/images/MiningUIC.svg';
import fmcgIconImage from '../assets/images/FmcgUIC.svg';
import mediaIconImage from '../assets/images/MediaUIC.svg';
import aviationIconImage from '../assets/images/AvacationUIC.svg';
import logisticsIconImage from '../assets/images/LogisticsUIC.svg';
import constructionIconImage from '../assets/images/ConstructionUIC.svg';
import educationIconImage from '../assets/images/EducationUIC.svg';
import agricultureIconImage from '../assets/images/AgricultueUIC.svg';
import hospitalityIconImage from '../assets/images/HospitalityUIC.svg';
import automobileIconImage from '../assets/images/AutomobileUIC.svg';
import HighlightText from './HighlightText';

const industries = [
  { name: 'GOVERNMENT', icon: governmentIconImage },
  { name: 'BANK', icon: bankIconImage },
  { name: 'INSURANCE', icon: insuranceIconImage },
  { name: 'ECOMMERCE', icon: ecommerceIconImage },
  { name: 'TELECOM', icon: telecomIconImage },
  { name: 'OIL & GAS', icon: oilGasIconImage },
  { name: 'RETAIL', icon: retailIconImage },
  { name: 'HEALTHCARE', icon: healthcareIconImage },
  { name: 'MINING', icon: miningIconImage },
  { name: 'FMCG', icon: fmcgIconImage },
  { name: 'MEDIA', icon: mediaIconImage },
  { name: 'AVIATION', icon: aviationIconImage },
  { name: 'LOGISTICS', icon: logisticsIconImage },
  { name: 'CONSTRUCTION', icon: constructionIconImage },
  { name: 'EDUCATION', icon: educationIconImage },
  { name: 'AGRICULTURE', icon: agricultureIconImage },
  { name: 'HOSPITALITY', icon: hospitalityIconImage },
  { name: 'AUTOMOBILE', icon: automobileIconImage },
];

const IndustrySection = () => {
  return (
    <div className="bg-white max-w-[1150px] py-14 px-8 flex flex-col">
      <div className="flex flex-col gap-6 justify-center">
        <h1 className="lg:w-[100%] text-black text-center text-5xl font-mullish font-bold">
          WHO SHOULD <HighlightText text=" ATTEND ?" />
        </h1>
        <div className="w-1/2 h-1 mt-1 bg-black mx-auto"></div>
      </div>

      <div className="flex gap-5 pt-12 items-center">
        <div className="h-16 w-1 bg-deepBlue mx-auto"></div>
        <h1 className="w-full text-deepBlue font-mullish text-5xl font-semibold">
          BY INDUSTRY
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden bg-white px-8 py-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg"
          >
            <div className="flex flex-col items-center">
              <div className="pt-4 text-deepBlue text-5xl">
                <img src={industry.icon} alt={industry.name} className="h-10 w-10" style={{ filter: 'invert(0%)' }} />
              </div>
              <div className="pt-6 text-lg font-semibold leading-5 text-center">
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
