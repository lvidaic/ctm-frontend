import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

export async function fetchImage({ url, args }) {
  const res = await axios.post(url, { objectName: args });
  return res.data;
}
