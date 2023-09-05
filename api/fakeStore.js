import axios from "axios";

export const fakestoreAPI = axios.create({
    baseURL: import.meta.env.VITE_FAKESTORE_BASE_URL,
});