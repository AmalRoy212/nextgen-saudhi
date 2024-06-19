import AboutImage from "../assets/images/Ban.jpg";
import HighlightText from "./HighlightText";

const AboutSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row mx-auto max-w-[1200px] gap-20 items-center">
        <div className="lg:w-[50%]">
          <img
            src={AboutImage}
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
            The UIC Data Analytics & Low Code No Code Conference & Awards 2024
            is a landmark event bringing together chief data analytics officers,
            chief technology officers, and leaders in data, analytics, and low
            code/no code development. This conference is designed for those
            striving to revolutionize their organizations through the power of
            data analytics, AI, and innovative software development approaches.
            In today's dynamic landscape, D&A leaders and CTOs navigate the
            complexities of data-driven and AI-powered enterprises to deliver
            substantial business value. By fostering synergies between
            artificial and human intelligence, and leveraging low code and no
            code platforms, leaders can steer their organizations towards
            strategic success. This conference addresses these challenges
            head-on, equipping attendees with the tools to scale initiatives
            using best practices in data management, architecture, governance,
            and software development. At the UIC Data Analytics & Low Code No
            Code Conference & Awards, participants will gain insights into
            maximizing business impact within budget constraints, aligning data
            and analytics strategies, embracing AI adoption, and optimizing
            development workflows. The event fosters collaboration between IT
            and business units, ensuring compliance and security in application
            development. Join us to explore the latest trends, best practices,
            and success stories. Celebrate the achievements of organizations and
            individuals pushing the boundaries of innovation in the digital age,
            and gain strategic insights to drive meaningful change and
            organizational success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
