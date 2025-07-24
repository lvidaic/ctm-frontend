import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

export async function fetchImage({ url, args }) {
  const res = await axios.post(url, { objectName: args });
  return res.data;
}

export const fetchAutocomplete = (url, { arg }) =>
  axios
    .post(url, { query: arg.query, sessionToken: arg.sessionToken })
    .then((res) => res.data);

export const fetchPlaceDetails = (url, { arg }) =>
  axios
    .post(url, { placeId: arg.placeId, sessionToken: arg.sessionToken })
    .then((res) => res.data);
