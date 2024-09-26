import React from 'react'
import HighlightText from './HighlightText';
import image from "../assets/images/image222222.jpg";
import data_m from "../assets/images/data_m.jpg";
import bpm from "../assets/images/bpm.jpg";
import bi from "../assets/images/bi.webp";
import api from "../assets/images/api.png";
import realtime from "../assets/images/realtime.jpg";


const KeyTopics = () => {
  return (
    <div className="bg-white max-w-[1150px] py-14 px-8 flex flex-col">
      <div className="flex flex-col gap-4 justify-center mb-24">
        <h1 className="lg:w-[100%] text-black text-center text-4xl font-mullish font-bold">
          KEY FOCUS<HighlightText text="  AREAS" />
        </h1>
        <div className="w-1/3 h-1 mt-1 bg-black mx-auto"></div>
      </div>

      <div className='w-full flex gap-x-10 gap-y-10 flex-col md:flex-row'>
        <div className='md:w-1/2 flex flex-col gap-y-10 bg-slate-100 rounded-xl shadow-2xl'>
          <img className='rounded-xl w-full h-[300px] object-cover shadow-2xl' src={image} alt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnZ-M6_2xgUWKt5mM5KS-y5rkuFv0Rle8Iw&s'/>
          <h1 className='w-full flex justify-center items-center text-2xl'><HighlightText text="Digital Integration" /></h1>
          <p className='p-5 mt-[-3rem] text-black mb-10'>
            Explore the technologies that are bridging the gap between legacy systems and modern digital solutions.
          </p>
        </div>
        <div className='md:w-1/2 flex flex-col gap-y-10 bg-slate-100 rounded-xl shadow-2xl'>
          <img className='rounded-xl w-full h-[300px] object-cover shadow-2xl' src='https://creativemansion.com.ng/wp-content/uploads/2022/10/Business-Automation-Tips-You-Can-Start-Using-Now-to-Boost-Productivity-1024x683.jpg' alt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnZ-M6_2xgUWKt5mM5KS-y5rkuFv0Rle8Iw&s'/>
          <h1 className='w-full flex justify-center items-center text-2xl'><HighlightText text="Digital Process Automation" /></h1>
          <p className='p-5 mt-[-3rem] text-black mb-10'>
            Uncover how automation is enhancing efficiency, reducing costs, and improving overall digital performance.
          </p>
        </div>
      </div>

      <div className='w-full flex gap-x-10 gap-y-10 flex-col md:flex-row mt-20'>
        <div className='md:w-1/2 flex flex-col gap-y-10 bg-slate-100 rounded-xl shadow-2xl'>
          <img className='rounded-xl w-full h-[300px] object-cover shadow-2xl' src={data_m} alt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnZ-M6_2xgUWKt5mM5KS-y5rkuFv0Rle8Iw&s'/>
          <h1 className='w-full flex justify-center items-center text-2xl'><HighlightText text="Data Management" /></h1>
          <p className='p-5 mt-[-3rem] text-black mb-10'>
            Efficient data management empowers businesses to organize, store, and analyze data for smarter decision-making and improved performance.
          </p>
        </div>
        <div className='md:w-1/2 flex flex-col gap-y-10 bg-slate-100 rounded-xl shadow-2xl'>
          <img className='rounded-xl w-full h-[300px] object-cover shadow-2xl' src={bpm} alt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnZ-M6_2xgUWKt5mM5KS-y5rkuFv0Rle8Iw&s'/>
          <h1 className='w-full flex justify-center items-center text-2xl'><HighlightText text="Business Process Management" /></h1>
          <p className='p-5 mt-[-3rem] text-black mb-10'>
            Business Process Management streamlines operations by optimizing workflows, enhancing efficiency, and driving continuous improvement across an organization.
          </p>
        </div>
      </div>

      <div className='w-full flex gap-x-10 gap-y-10 flex-col md:flex-row mt-20'>
        <div className='md:w-1/2 flex flex-col gap-y-10 bg-slate-100 rounded-xl shadow-2xl'>
          <img className='rounded-xl w-full h-[300px] object-cover shadow-2xl' src={bi} alt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnZ-M6_2xgUWKt5mM5KS-y5rkuFv0Rle8Iw&s'/>
          <h1 className='w-full flex justify-center items-center text-2xl'><HighlightText text="Business Intelligence" /></h1>
          <p className='p-5 mt-[-3rem] text-black mb-10'>
            Business Intelligence transforms data into actionable insights, helping organizations make informed decisions and gain a competitive edge.
          </p>
        </div>
        <div className='md:w-1/2 flex flex-col gap-y-10 bg-slate-100 rounded-xl shadow-2xl'>
          <img className='rounded-xl w-full h-[300px] object-cover shadow-2xl' src={api} alt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnZ-M6_2xgUWKt5mM5KS-y5rkuFv0Rle8Iw&s'/>
          <h1 className='w-full flex justify-center items-center text-2xl'><HighlightText text="API Management" /></h1>
          <p className='p-5 mt-[-3rem] text-black mb-10'>
            API Management enables secure, scalable, and efficient integration of applications, ensuring seamless connectivity and data flow across systems.
          </p>
        </div>
      </div>
      {/* <div className='w-full flex gap-x-10 gap-y-10 flex-col md:flex-row mt-20 justify-center'>
        <div className='md:w-1/2 flex flex-col gap-y-10 bg-slate-100 rounded-xl shadow-2xl'>
          <img className='rounded-xl w-full h-[300px] object-cover shadow-2xl' src={realtime} alt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnZ-M6_2xgUWKt5mM5KS-y5rkuFv0Rle8Iw&s'/>
          <h1 className='w-full flex justify-center items-center text-2xl'><HighlightText text="Real Time Analytics" /></h1>
          <p className='p-5 mt-[-3rem] text-black mb-10'>
            API Management enables secure, scalable, and efficient integration of applications, ensuring seamless connectivity and data flow across systems.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default KeyTopics
