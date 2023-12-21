import React from "react";
let haveBorder = true;
const QuarterBox = ({ title, paragraph, num }) => {
  return (
    <div>
      <div
        className={`${
          haveBorder && "border"
        } rounded-md basis-4/12 md:w-96 md:h-48 relative px-8 py-12 flex flex-col justify-center`}
      >
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="mt-2 text-slate-600">{paragraph} </p>
        <span className="absolute -top-10 right-10 text-[170px] font-bold -z-10 opacity-10  ">
          {num}{" "}
        </span>
      </div>
    </div>
  );
};

export default QuarterBox;
