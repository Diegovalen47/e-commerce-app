import type ProductRepository from '@/domain/respositories/product_repository'
import { fetchAllProducts } from '../services/product'
import ProductModel from '../models/product_model'

export default class ProductRepositoryImpl implements ProductRepository {
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
            return ProductModel.fromJson({
              id: product.id,
              title: product.title,
              description: product.description,
              price: product.price,
              discountPercentage: product.discountPercentage,
              rating: product.rating,
              stock: product.stock,
              brand: product.brand,
              category: product.category,
              thumbnail: product.thumbnail,
              images: product.images
            })
          })
        }
      )
      .unwrapOr([] as ProductModel[])
  }
}
