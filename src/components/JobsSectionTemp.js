import HighlightText from "./HighlightText";
// const jobTitle = [
//   "C-Level Executives",
//   "Senior Management",
//   "Middle Management",
//   "Specialists And Analysts",
// ];

const jobTitlePosts = [
  "Chief Executive Officer (CEO)",
  "Chief Technology Officer (CTO)",
  "Chief Information Officer (CIO)",
  "Chief Data Officer (CDO)",
  "Chief Data Scientist (CDS)",
  // "Chief Analytics Officer (CAO) ",
  // "Chief Data & Analytics Officer (CDAO)",
  // "Chief Data Privacy Officer (CDPO)",
  // "Chief Financial Officer (CFO)",
  // "Chief Strategy Officer (CSO)",

  "Vice President (VP) of Technology",
  "Vice President (VP) of Information Technology",
  "Vice President (VP) of Data Analytics",
  "Vice President (VP) of Data Science",
  "Vice President (VP) of Business Intelligence",
  // "Vice President (VP) of Analytics",
  // "Vice President (VP) of Strategy",
  // "Vice President (VP) of Operations",

  "Director of Technology",
  "Director of IT",
  "Director of Data Analytics",
  "Director of Data Science",
  "Director of Business Intelligence",
  // "Director of Analytics",
  // "Director of Strategy",
  // "Director of Operations",
  // "Director/Head of CRM",

  "Data Scientist",
  "Data Analyst",
  "Data Engineer",
  "Data Architect",
  "Business Intelligence Analyst",
  "Business Analyst",
  // "Analytics Manager",
  // "Database Administrator (DBA)",
  // "Data Governance Manager",
  // "Data Visualization Specialist",
  // "Machine Learning Engineer",
  // "AI Engineer",
  // "Statistician",
  // "Quantitative Analyst",
  // "Predictive Modeler",
];

const JobsSectionTemp = () => {
  return (
    <div className="flex flex-col items-center max-w-[1200px] p-8 bg-[#000820] text-white rounded-lg shadow-lg">
      <div className="flex flex-col gap-5 justify-center">
        <h1 className="lg:w-[100%] text-center text-5xl font-mullish font-bold">
          WHO SHOULD
          <HighlightText text={" ATTEND ?"} />
        </h1>
        <div className="w-1/2 h-1 mt-1 bg-white mx-auto"></div>
      </div>

      <div className="mt-5">
        <h2 className="text-center text-3xl font-bold font-mullish">
          JOB TITLE
        </h2>
        {/* <div className="flex flex-wrap justify-center mt-7 gap-6 ">
              {jobTitle.map((category, index) => (
                <div
                  key={index}
                  className="px-6 py-2 border  border-gray-400 rounded-full text-xl  hover:bg-gray-300 hover:text-[#000814] transition-colors duration-300 cursor-pointer"
                >
                  {category}
                </div>
              ))}
            </div> */}
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap justify-center mt-4 gap-4">
          {jobTitlePosts.map((title, index) => (
            <div
              key={index}
              className="px-4 py-2 border border-red-500 rounded-full text-lg hover:bg-deepBlueHead hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsSectionTemp;
