import axios from "axios";

import moviesData from "./mergeData";

const api = axios.create({
  baseURL: "https://challenge.lexicondigital.com.au/api/v2/",
  headers: {
    "x-api-key": process.env.REACT_APP_X_API_Key,
  },
});

const getData = async () => {
  const retry = async (center) => {
    return new Promise(async (resolve, reject) => {
      let retries = 0;
      let maxRetries = 15;
      let isSuccessful = false;

      while (!isSuccessful && retries < maxRetries) {
        try {
          const response = await api.get(`${center}/movies`);
          isSuccessful = true;
          resolve(response.data.Movies);
        } catch (err) {
          const status = err?.response?.status || 500;
          console.log(`Error Status: ${status}`);
          retries++;
        }
      }
      reject("Server is offline, please try again later");
    });
  };
  const fwResponse = await retry("filmworld").catch((err) => {
    alert(err);
  });

  const cwResponse = await retry("cinemaworld").catch((err) => {
    alert(err);
  });

  const movies = moviesData(fwResponse, cwResponse);

  return movies;
};

export default getData;
