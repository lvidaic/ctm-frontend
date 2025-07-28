import useSWR from "swr";
import { fetcher } from "../utils/fetchers";

export function useEvent(id) {
  const {
    data: event,
    error: isError,
    isLoading,
  } = useSWR(id ? "http://localhost:8080/api/events/" + id : null, fetcher);

  return {
    event,
    isError,
    isLoading,
  };
}
