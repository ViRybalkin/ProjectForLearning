import axios from "axios";
import {LOCAL_STORAGE_KEY} from "../../constants/localStorageKey";

export const $api = axios.create({
    baseURL: __BASE_URL__,
})
$api.interceptors.request.use(config => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(LOCAL_STORAGE_KEY.auth) || '';
    }
    return config;
})