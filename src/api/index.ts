import axios, { InternalAxiosRequestConfig } from 'axios'

const authBackendUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8080'

const $api = axios.create({
  baseURL: authBackendUrl,
})

$api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')

    if (!token) {
      console.error('Token is not available in localStorage')
      throw new Error('Auth data is not available')
    }

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default $api
