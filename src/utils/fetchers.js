import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

export async function fetchImage(url, image) {
  console.log("loading");
  console.log(image);
  const res = await axios.post(url, { objectName: image() });
  return res.data;
}
