import React from 'react'
import HighlightText from './HighlightText';

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
          <img className='rounded-xl w-full h-[300px] object-cover shadow-2xl' src='https://www.costain.com/media/598774/gettyimages-957654566_web.jpg?anchor=center&mode=crop&width=1120&heightratio=0.4734375&format=jpg&slimmage=true&quality=80&rnd=13209730562000000' alt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnZ-M6_2xgUWKt5mM5KS-y5rkuFv0Rle8Iw&s'/>
          <h1 className='w-full flex justify-center items-center text-2xl'><HighlightText text="  Digital Integration" /></h1>
          <p className='p-5 mt-[-3rem] text-black mb-10'>
            Explore the technologies that are bridging the gap between legacy systems and modern digital solutions.
          </p>
        </div>
        <div className='md:w-1/2 flex flex-col gap-y-10 bg-slate-100 rounded-xl shadow-2xl'>
          <img className='rounded-xl w-full h-[300px] object-cover shadow-2xl' src='https://creativemansion.com.ng/wp-content/uploads/2022/10/Business-Automation-Tips-You-Can-Start-Using-Now-to-Boost-Productivity-1024x683.jpg' alt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnZ-M6_2xgUWKt5mM5KS-y5rkuFv0Rle8Iw&s'/>
          <h1 className='w-full flex justify-center items-center text-2xl'><HighlightText text="  Business Process Automation" /></h1>
          <p className='p-5 mt-[-3rem] text-black mb-10'>
            Uncover how automation is enhancing efficiency, reducing costs, and improving overall business performance.
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default KeyTopics
