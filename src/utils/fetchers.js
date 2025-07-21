import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

export const imageFetcher = (args) =>
  axios.post(args.url, { objectName: args.data }).then((res) => res.data);
