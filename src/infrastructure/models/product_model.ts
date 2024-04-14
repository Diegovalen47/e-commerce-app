import type Product from '@/domain/entities/product'

export default class ProductModel implements Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]

  constructor(product: Product) {
    this.id = product.id
    this.title = product.title
    this.description = product.description
    this.price = product.price
    this.discountPercentage = product.discountPercentage
    this.rating = product.rating
    this.stock = product.stock
    this.brand = product.brand
    this.category = product.category
    this.thumbnail = product.thumbnail
    this.images = product.images
  }

  static fromJson(json: any): ProductModel {
    return new this({
      id: json.id,
      title: json.title,
      description: json.description,
      price: json.price,
      discountPercentage: json.discountPercentage,
      rating: json.rating,
      stock: json.stock,
      brand: json.brand,
      category: json.category,
      thumbnail: json.thumbnail,
      images: json.images
    })
  }
}

export enum ORDER_PRODUCTS_BY {
  RATING,
  PRICE,
  DISCOUNT,
  NAME
}
