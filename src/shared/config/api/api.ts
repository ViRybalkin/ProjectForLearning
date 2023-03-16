import axios from "axios";

export const $api = axios.create({
  baseURL: __BASE_URL__,
  headers: {
    authorization: localStorage.getItem('auth')
  }
})