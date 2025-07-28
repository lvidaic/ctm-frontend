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

export const createClient = (url, { arg }) => {
  const flatClient = { ...arg.savedClient, ...arg.savedClient.address };

  const json = JSON.stringify(flatClient);
  const blob = new Blob([json], {
    type: "application/json",
  });
  const data = new FormData();

  data.append("client", blob);
  data.append("image", arg.savedImage);

  axios.post(url, data).then((res) => res.data);
};

export const createProvider = (url, { arg }) => {
  const flatProvider = { ...arg.savedProvider, ...arg.savedProvider.address };
  const json = JSON.stringify(flatProvider);

  const blob = new Blob([json], {
    type: "application/json",
  });
  const data = new FormData();

  data.append("provider", blob);
  data.append("image", arg.savedImage);
  axios.post(url, data).then((res) => res.data);
};
