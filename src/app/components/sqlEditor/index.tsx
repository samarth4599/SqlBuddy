"use client";
import { csvLink } from "@/app/constants/constants";
import { useBoundStore } from "@/app/store/rootStore";
import { callApi } from "@/app/utilities/api";
import { csvConverter } from "@/app/utilities/helpers";
import { sql } from "@codemirror/lang-sql";
import CodeMirror from "@uiw/react-codemirror";
import React, { useState } from "react";

const SqlEditor: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const { setData, setState, setHistory } = useBoundStore((state) => state);
  const onChange = React.useCallback((value: string) => {
    setValue(value);
  }, []);
  const onReset = () => {
    setValue("");
  };
  const onExecute = async () => {
    const getCSV = await callApi(csvLink("customers"), setState);
    csvConverter(getCSV, setData);
    setHistory(value);
  };
  return (
    <div className="flex flex-grow md:flex-grow-0 flex-col">
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
          onClick={onReset}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Reset
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

export default SqlEditor;
