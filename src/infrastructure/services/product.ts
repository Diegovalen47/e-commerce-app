import axios from '@/config/httpClient'
import { ok, err, Result } from 'neverthrow'

export const fetchAllProducts = async (): Promise<Result<Array<any>, Error>> => {
  try {
    const response = await axios.get('/products?limit=0')
    return ok(response.data.products as Array<any>)
  } catch (error) {
    return err(new Error('Error fetching products'))
  }
}

export const searchProducts = async (query: string): Promise<Result<Array<any>, Error>> => {
  try {
    const response = await axios.get(`/products/search?q=${query}`)
    return ok(response.data.products as Array<any>)
  } catch (error) {
    return err(new Error('Error searching products'))
  }
}

export const fetchProductById = async (id: number): Promise<Result<any, Error>> => {
  try {
    const response = await axios.get(`/products/${id.toString()}`)
    return ok(response.data)
  } catch (error) {
    return err(new Error('Error fetching product'))
  }
}
