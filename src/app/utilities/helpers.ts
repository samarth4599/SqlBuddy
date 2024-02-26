import { readString } from "react-papaparse";
import { TTableData } from "../constants/interfaces";

export const csvConverter = (
  data: any,
  setData: (data: TTableData) => void
) => {
  const encodedData = data.content.replace("\n", "");
  const stringData = atob(encodedData);
  readString(stringData, {
    worker: true,
    complete: (results: any) => setData(results.data),
  });
};
