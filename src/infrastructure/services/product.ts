import axios from '@/config/httpClient'
import { ok, err, Result } from 'neverthrow'

export const fetchAllProducts = async (): Promise<Result<Array<any>, Error>> => {
  try {
    const response = await axios.get('/products')
    return ok(response.data.products as Array<any>)
  } catch (error) {
    return err(new Error('Error fetching products'))
  }
}
