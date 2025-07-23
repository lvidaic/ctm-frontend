export function useImage(address) {
  const {
    data: image,
    error: isError,
    isLoading,
  } = useSWR(
    () => ({
      url: "http://localhost:8080/api/images/image",
      args: client.address.address,
    }),
    fetchImage,
  );

  return {
    image,
    isError,
    isLoading,
  };
}
