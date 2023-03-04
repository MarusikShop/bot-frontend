import Axios from "axios";

export const axiosBase = Axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})