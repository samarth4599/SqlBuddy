import React from "react";
import SqlEditor from "../sqlEditor";

const LayoutBox: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row flex-grow p-3">
      <div className="flex flex-grow flex-col w-full md:w-1/2 ">
        <SqlEditor />
      </div>
      <div className="w-full md:w-1/2 ">{/* Content for the right part */}</div>
    </div>
  );
};

export default LayoutBox;
