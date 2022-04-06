import axios from "axios";

let AURate;
//call API
//test 3
export default async function main() {
  const api = axios.create({
    baseURL: "https://challenge.lexicondigital.com.au/api/exchangerate/usd",
    headers: {
      "x-api-key": process.env.REACT_APP_X_API_Key,
    },
  });
  const getRate = async () => {
    await api.get("").then((response) => {
      AURate = response.data.rates.AU;
      console.log(AURate);
    });
  };
  await getRate().catch((error) => console.log(error));
  return AURate;
}
