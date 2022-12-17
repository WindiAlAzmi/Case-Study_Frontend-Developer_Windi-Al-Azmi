import React from "react";


const SkeletonCard = () => {
      return (
        <div className="animate-pulse w-full flex flex-col p-3 border border-neutral-400 rounded-lg ">
          <div className="bg-slate-200 rounded-lg h-64 w-full"></div>
          <div className=" flex flex-col left-0 text-black gap-4 text-left bg-white  py-5">
            <div className="h-4 w-4/5 bg-slate-200"></div>
            <div className=" h-4 w-1/4 bg-slate-200"></div>
            <div className="grid grid-cols-1 gap-2">
              <div className="h-4 w-full bg-slate-200"></div>
              <div className="h-4 w-full bg-slate-200"></div>
              <div className="h-4 w-full bg-slate-200"></div>
            </div>
          </div>
          <button className="bg-sky-900 border border-black text-white  w-full rounded-lg h-10 mb-2 grid place-items-center"></button>
        </div>
      );
  

  
};

export default SkeletonCard;
