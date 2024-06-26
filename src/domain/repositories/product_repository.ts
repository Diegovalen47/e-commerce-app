export default interface ProductRepository {
  getAllProducts(): Promise<any>
  searchProducts(query: string): Promise<any>
  getProductById(id: number): Promise<any>
}
