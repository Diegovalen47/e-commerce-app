import axios, { type AxiosInstance } from 'axios'
import { baseURL } from '@/config/appSettings'

console.log('httpClient.ts', baseURL)

const instance: AxiosInstance = axios.create({
  baseURL: baseURL
})

export default instance
