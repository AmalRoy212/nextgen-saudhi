import React from "react";
import AboutImage from "../assets/images/hiking.jpg";
import HighlightText from "./HighlightText";

// Sample speaker data
const speakers = [
  { id: 1, name: "Speaker Name", image: AboutImage },
  { id: 2, name: "Speaker Name", image: AboutImage },
  { id: 3, name: "Speaker Name", image: AboutImage },
  { id: 4, name: "Speaker Name", image: AboutImage },
  { id: 5, name: "Speaker Name", image: AboutImage },
  { id: 6, name: "Speaker Name", image: AboutImage },
];

const SpeakerSection = () => {
  return (
    <div className="flex flex-col w-full gap-12 items-center">
      <h1 className="lg:w-[100%] text-center text-4xl font-semibold ">
        Featured
        <HighlightText text={" Speakers"} />
      </h1>

      <section className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="w-80 bg-white font-mullish cursor-pointer rounded-xl duration-500 hover:scale-105"
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <p className="text-lg font-bold text-deepBlue text-center hover:text-deepBlue">
                {speaker.name}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SpeakerSection;
