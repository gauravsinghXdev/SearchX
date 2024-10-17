import React from "react";

const Saperator = ({ text }) => {
  return (
    <div className="flex items-center  mt-2">
      <div className="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
      <span className="mx-10 !font-extralight text-[#C9C9C9] text-center">
        {text}
      </span>

      <div className="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
    </div>
  );
};

export default Saperator;
