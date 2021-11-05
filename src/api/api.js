import axios from "axios";
import { store } from "../store";
import { startFetch, endFetch } from "../store/slice";
import { getAuthorizationHeader } from "./apiHandler";
import { errorHandler } from "./apiHandler";
/**
 * api config設定
 */
export const api = axios.create({
  baseURL: "https://ptx.transportdata.tw/MOTC",
  headers: getAuthorizationHeader(),
  // TODO: Timeout設定幾秒
  timeout: 20000,
});

// api request攔截器
api.interceptors.request.use(
  (config) => {
    store.dispatch(startFetch());
    return config;
  },
  (error) => {
    // store.dispatch(setError({ error }));
    // return Promise.reject(error);
    return;
  }
);

// api response攔截器
api.interceptors.response.use((response) => {
  store.dispatch(endFetch());
  return response;
}, errorHandler);

/**
 * 取得api資料的方法
 * @param {*} url 如 /v2/Tourism/ScenicSpot
 * @param {*} params
 * @returns Promise物件
 */
export const fetchApi = (url, params = null) => {
  return api.get(url, { params: { ...params } });
};
