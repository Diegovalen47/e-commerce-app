import axios, { type AxiosInstance } from 'axios';
import { baseURL } from "@/config/appSettings";
import { AxiosKey } from '@/app/lib/symbols'

export default {
  install: (app: any) => {
    const instance: AxiosInstance = axios.create({
      baseURL: baseURL,
    });
    app.provide(AxiosKey, instance)
  }
}