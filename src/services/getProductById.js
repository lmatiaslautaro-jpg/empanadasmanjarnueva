import { getProducts } from '../mock/asyncMock'

export function getProductById(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const productos = await getProducts()
      const producto = productos.find((p) => p.id === productId)

      if (producto) {
        resolve(producto)
      } else {
        reject(new Error('Producto no encontrado'))
      }
    }, 500)
  })
}