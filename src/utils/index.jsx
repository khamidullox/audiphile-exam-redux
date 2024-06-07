import axios from "axios";

let url =
  "https://online-json-server-api.up.railway.app/project/665eff901d2cd3eb1142aab4/products";
export let customFetch = axios.create({
  baseURL: url,
});
export let formatPrice = (price) => {
  let dollarAmout = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(Math.trunc(price));

  return dollarAmout;
};
