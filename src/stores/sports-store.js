import useSWR from "swr";
import { fetcher } from "../utils/fetchers.js";

export function useSports() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8080/api/sports",
    fetcher,
  );
  return {
    sports: data,
    isError: error,
    isLoading,
  };
}
