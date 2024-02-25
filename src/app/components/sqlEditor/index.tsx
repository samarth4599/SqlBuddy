"use client";
import { sql } from "@codemirror/lang-sql";
import CodeMirror from "@uiw/react-codemirror";
import React, { memo, useState } from "react";

const SqlEditor: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const onChange = React.useCallback((value: string) => {
    console.log("value:", value);
    setValue(value);
  }, []);
  const onClear = () => {
    setValue("");
  };

  const onExecute = () => {
    // console.log(ref.current?.getValue());
  };
  return (
    <div className="flex flex-grow flex-col">
      <CodeMirror
        placeholder={"Write your SQL here"}
        maxHeight="200px"
        height="200px"
        autoFocus={true}
        autoCorrect="true"
        extensions={[sql()]}
        onChange={onChange}
        value={value}
      />
      <div className="flex gap-3 mt-2">
        <button
          onClick={onClear}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Clear
        </button>
        <button
          onClick={onExecute}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
        >
          Execute
        </button>
      </div>
    </div>
  );
};

export default memo(SqlEditor);
