import useSWR from "swr";
import { fetcher } from "../utils/fetchers.js";

export function useClient(id) {
  const { data, error, isLoading } = useSWR(
    id ? "http://localhost:8080/api/clients/" + id : null,
    fetcher,
  );

  return {
    client: data,
    isError: error,
    isLoading: isLoading,
  };
}
