export function useImage(client) {
  const { data, error, isLoading } = useSWR(
    () => ({
      url: "http://localhost:8080/api/images/image",
      args: client.image.url,
    }),
    fetchImage,
  );

  return {
    image: data,
    isError: error,
    isLoading,
  };
}
