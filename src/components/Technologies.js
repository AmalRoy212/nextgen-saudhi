import React from "react";
import workatoLogo from "../assets/images/workato UIC.svg";
import makeLogo from "../assets/images/makeUIC.svg";
import solaceLogo from "../assets/images/solaceUIC.svg";
import denodoLogo from "../assets/images/denodoUIC.svg";
import kissflowLogo from "../assets/images/kissflowUIC.svg";
import dbtLogo from "../assets/images/dbtUIC.svg";
import exalateLogo from "../assets/images/exalateUIC.svg";
import cleverflowLogo from "../assets/images/cleverflowUIC.png";
import odooLogo from "../assets/images/OdooUIC.svg";
import HighlightText from "./HighlightText";

const Technologies = () => {
  return (
    <div className="bg-white max-w-[1300px] py-14 px-8 flex flex-col">

      <div className="flex flex-col gap-7 justify-center items-center">
        <h1 className="lg:w-[100%] text-black text-center uppercase text-5xl font-mullish font-bold">
          Heading Our <HighlightText text=" Technology Partner" />
        </h1>

        <p className="text-lg font-semibold text-gray-600 mt-7">
          Nurturing Innovation and Growth Through Trusted Alliances and
          Strategic Collaborations
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-12 mb-10 gap-9">
        <img src={workatoLogo} alt="Workato" className="h-40 w-auto " />
        <img src={makeLogo} alt="Make" className="h-8 w-auto" />
        <img src={solaceLogo} alt="Solace" className="h-24 w-auto" />
        <img src={denodoLogo} alt="Denodo" className="h-11 w-auto" />
        <img src={kissflowLogo} alt="KissFlow" className="h-52 w-auto" />
        {/* <img src={dbtLogo} alt="dbt" className="h-10 w-auto" /> */}
        {/* <img src={exalateLogo} alt="exalate" className="h-12 w-auto" /> */}
        <img src={cleverflowLogo} alt="cleverflow" className="h-24 w-auto" />
        <img src={odooLogo} alt="odoo" className="h-7 w-auto" />
      </div>
    </div>
  );
};

export default Technologies;
