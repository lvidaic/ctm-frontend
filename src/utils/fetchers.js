import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

export async function fetchImage(url, { arg }) {
  console.log(arg, url);
  const res = await axios.post(url, { objectName: arg });
  return res.data;
}
