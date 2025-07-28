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

export function useCurrentClient() {
  return useClient("34ef239c-5230-4064-9129-ce995de4ca5a");
}
