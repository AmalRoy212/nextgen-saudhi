import HighlightText from "./HighlightText";
import AboutImg from "../assets/images/AboutUIC.jpeg";

const AboutSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row mx-auto max-w-[1200px] gap-20 items-center">
        <div className="lg:w-[50%]">
          <img
            src={AboutImg}
            alt="AboutImage"
            className="shadow-white shadow-[-20px_-20px_0_0]"
          />
        </div>
        <div className="lg:w-[50%] flex gap-10 flex-col">
          <h1 className="lg:w-[100%] text-center text-4xl font-semibold ">
            About
            <HighlightText text={" Conference"} />
          </h1>

          <p className="font-medium text-[16px] text-justify w-[100%] text-[#838894]">
            The UIC NextGen Automation & Data Conference is a premier event tailored for technology leaders from enterprise companies and government bodies. This event is dedicated to exploring the latest advancements in automation and integration technologies. Industry leaders and tech innovators will come together to discuss and showcase cutting-edge solutions that are streamlining processes, enhancing efficiency, and transforming operations across both the private and public sectors. Attendees will gain valuable insights into the most impactful automation and integration tools, making it an essential gathering for those looking to drive innovation and stay ahead in the rapidly evolving tech landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
