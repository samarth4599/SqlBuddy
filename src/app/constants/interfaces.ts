type TRow = string[];
export type TTableData = TRow[];

export type TScreenState = "loading" | "error" | "success";

export interface IHeaderObject {
  id: string;
  displayName: string;
}
