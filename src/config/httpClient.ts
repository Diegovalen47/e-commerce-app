import axios, { type AxiosInstance } from 'axios'
import { baseURL } from '@/config/appSettings'

const instance: AxiosInstance = axios.create({
  baseURL: baseURL
})

export default instance
