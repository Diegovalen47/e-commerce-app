import type ProductRepository from '@/domain/repositories/product_repository'
import { fetchAllProducts, fetchProductById, searchProducts } from '../services/product'
import ProductModel from '../models/product_model'

export default class ProductRepositoryImpl implements ProductRepository {
  async getProductById(id: number) {
    const result = await fetchProductById(id)

    return result
      .mapErr((error) => {
        console.error(error)
        return ProductModel.EmptyProduct()
      })
      .map((product) => {
        // This map function is from the neverthrow library
        return ProductModel.fromJson(product)
      })
      .unwrapOr(ProductModel.EmptyProduct())
  }
  async getAllProducts() {
    const result = await fetchAllProducts()

    return result
      .mapErr((error) => {
        console.error(error)
        return [] as ProductModel[]
      })
      .map(
        // This map function is from the neverthrow library
        (products) => {
          return products.map((product) => {
            return ProductModel.fromJson(product)
          })
        }
      )
      .unwrapOr([] as ProductModel[])
  }
  async searchProducts(query: string): Promise<any> {
    const result = await searchProducts(query)

    return result
      .mapErr((error) => {
        console.error(error)
        return [] as ProductModel[]
      })
      .map(
        // This map function is from the neverthrow library
        (products) => {
          return products.map((product) => {
            return ProductModel.fromJson(product)
          })
        }
      )
      .unwrapOr([] as ProductModel[])
  }
}
