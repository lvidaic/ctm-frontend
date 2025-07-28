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

//hardcoded for now, it will pull userId data from jwt token, good for now
export function useCurrentProvider() {
  return useProvider("db17ae0e-15e9-499e-9267-a431afde5b93");
}
