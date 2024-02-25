import React from "react";

const LayoutBox: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gray-200">
        {/* Content for the left part */}
      </div>
      <div className="w-full md:w-1/2 bg-gray-300">
        {/* Content for the right part */}
      </div>
    </div>
  );
};

export default LayoutBox;
