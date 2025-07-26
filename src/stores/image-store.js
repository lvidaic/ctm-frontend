import useSWR from "swr";
import { fetchImage } from "../utils/fetchers";

export function useImage(user) {
  const { data, error, isLoading } = useSWR(
    () => ({
      url: "http://localhost:8080/api/images/image",
      args: user.image.url,
    }),
    fetchImage,
  );

  return {
    image: data,
    isError: error,
    isLoading,
  };
}
