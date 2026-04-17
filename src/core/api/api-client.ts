import axios, { type AxiosInstance } from 'axios';
import { BASE_URL } from "../config/api.config";

export const apiClient: AxiosInstance = axios.create({

    baseURL: BASE_URL,

    timeout: 10000,

    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})