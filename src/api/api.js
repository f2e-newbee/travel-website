import axios from "axios";
import jsSHA from "jssha";
import { store } from "../store";
import { startFetch, endFetch } from "../store/slice";

/**
 * 定義api config
 */
export const api = axios.create({
  baseURL: "https://ptx.transportdata.tw/MOTC",
  headers: getAuthorizationHeader(),
  // TODO: Timeout設定幾秒
  timeout: 20000,
});

api.interceptors.request.use(
  (config) => {
    store.dispatch(startFetch());
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    store.dispatch(endFetch());
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Header Authorization設定
 * @returns
 */
function getAuthorizationHeader() {
  const AppID = "bdbebc0153784527916bfb36b23b04af";
  const AppKey = "6nyZwxsViiON7fFYoUxyGp0kwGw";

  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");

  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);

  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
}

