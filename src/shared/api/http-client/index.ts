import axios from "axios"


export const API_URL = "http://192.168.1.94:4000"

export const httpClient = axios.create({
	withCredentials: true,
	baseURL: API_URL,
})

httpClient.interceptors.request.use((config) => {
	config.headers.Authorization = `${localStorage.getItem('token')}`
	return config
})

httpClient.interceptors.response.use((config) => config, (error) => {
	return Promise.reject(error.status)
})

export default httpClient
