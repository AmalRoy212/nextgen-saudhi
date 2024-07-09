import Header from "./Header";
import HighlightText from "./HighlightText";
import UIClogo from "../assets/images/UIC.png";
import AboutSection from "./AboutSection";
// import SpeakerSection from "./SpeakerSection";
import IndustrySection from "./IndustrySection";
import JobsSectionTemp from "./JobsSectionTemp";
import RegistrationFormSection from "./RegistrationFormSection";
import Technologies from "./Technologies";

const Home = () => {
  return (
    <div className="bg-[#000814] flex flex-col min-h-screen w-screen">
      {/* Main Overview */}
      <section className="relative bg-cover  bg-center xl:h-screen sm:h-screen md:h-screen items-center">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3129576/3129576-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Black gradient overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <Header logo={UIClogo} />

        <div className="max-w-[950px] xl:py-0 py-11 xl:max-w-[850px] xl:px-0 px-7 flex flex-col gap-5 mx-auto items-center justify-between text-center relative z-10">
          <h1 className="text-xl sm:text-3xl md:text-5xl text-center xl:mt-16 md:mt-24 sm:mt-14 font-bold text-white">
            UIC DATA ANALYTICS & LOW CODE NO CODE
            <HighlightText text={" CONFERENCE (LCNC) 2024"} />
          </h1>

          <div className="w-1/12 h-1 mt-1 bg-deepBlue mx-auto"></div>

          <div className="flex gap-4 items-center justify-center">
            <h2 className="text-lg sm:text-xl md:text-4xl font-bold text-center text-[#cdd1d6]">
              Hosted by
            </h2>
            <a href="/" className="cursor-pointer">
              <img
                src={UIClogo}
                className="w-[100px] md:w-[130px]"
                alt="UIC Logo"
              />
            </a>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl mt-2 text-center bg-gradient-to-b from-[#eef1f3] via-[#dee2e4] to-[#98b5a4] text-transparent bg-clip-text font-bold">
            12 SEPTEMBER 2024, INTERCITYHOTEL MUSCAT
          </p>

          <p className="text-2xl sm:text-3xl md:text-4xl mt-2 text-center bg-gradient-to-b from-[#eef1f3] via-[#dee2e4] to-[#98b5a4] text-transparent bg-clip-text font-bold">
            SOUTH AL KHUWAIR, BOUSHER, MUSCAT, OMAN
          </p>
        </div>
      </section>

      {/* About section */}
      <section
        className="relative mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-[#000814] text-white"
        id="about"
      >
        <AboutSection />
      </section>

        {/* About section */}
        <section
        className="relative mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-[#000814] text-white"
        id="about"
      >
        <AboutSection />
      </section>

      {/* Speaker section */}
      {/* <section
        className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-[#000814] text-white"
        id="speakers"
      >
        <SpeakerSection />
      </section> */}

      {/* Industry section */}
      <section
        className="relative mx-auto mt-20 mb-10  flex w-full max-w-maxContent flex-col items-center justify-between gap-8 bg-white text-white"
        id="industry"
      >
        <IndustrySection />
      </section>

      {/* Job section */}
      <section
        className="relative mx-auto mt-10 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-[#000814] text-white"
        id="jobs"
      >
        <JobsSectionTemp />
      </section>

      {/* Technologies */}
      <section
        className="relative mx-auto mt-20 mb-10 flex w-full max-w-maxContent flex-col items-center justify-between gap-8 bg-white text-white"
        id="jobs"
      >
        <Technologies />
      </section>

      {/* Registration form */}
      <section className=" bg-[#000814] items-center">
        <RegistrationFormSection />
      </section>
    </div>
  );
};

export default Home;
