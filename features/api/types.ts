import { Error } from "./error";

export type QueryId = number | string | string[];

export type DataResponse<T> = {
  url: string;
  data: T | null;
  error: Error | null;
};
