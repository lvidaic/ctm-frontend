import useSWR from "swr";
import { fetcher } from "../utils/fetchers";

export function usePersonnel() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8080/api/personnel",
    fetcher,
  );

  return {
    personnel: data,
    isError: error,
    isLoading,
  };
}
