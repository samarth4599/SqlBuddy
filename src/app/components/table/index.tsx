"use client";
import { useBoundStore } from "@/app/store/rootStore";
import React, { useMemo } from "react";
import LoadingAnimation from "../loader";

const Table: React.FC = () => {
  const { data: newData, state } = useBoundStore((state) => state);

  const data = useMemo(() => {
    return newData;
  }, [newData]);

  const content = useMemo(() => {
    switch (state) {
      case "loading": {
        return (
          <div className="flex justify-center items-center h-full">
            <LoadingAnimation />
          </div>
        );
      }
      case "success": {
        if (data.length === 0) {
          return (
            <div className="flex justify-center items-center h-full">
              <span className="text-3xl text-gray-400 font-semibold">
                No data to display
              </span>
            </div>
          );
        }
        return (
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-50">
              <tr>
                {data[0].map((header, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.slice(1, 14).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      }
      default:
        return null;
    }
  }, [data, state]);

  return (
    <div className="overflow-scroll h-96 rounded-md border-2 border-gray-200 bg-white">
      {content}
    </div>
  );
};

export default Table;
