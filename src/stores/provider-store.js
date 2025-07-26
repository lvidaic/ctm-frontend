import useSWR from "swr";
import { fetcher } from "../utils/fetchers";

export function useProvider(id) {
  const { data, error, isLoading } = useSWR(
    id ? "http://localhost:8080/api/providers/" + id : null,
    fetcher,
  );

  return {
    provider: data,
    isError: error,
    isLoading,
  };
}
