import { useEffect, useState } from 'react'
import { getProductById } from '../services/getProductById'
import ItemDetail from './ItemDetail'

function ItemDetailContainer({ productId = 1 }) {
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const productoObtenido = await getProductById(productId)
        setProducto(productoObtenido)
      } catch (error) {
        console.error(error)
      }
    }

    cargarProducto()
  }, [productId])

  if (!producto) {
    return <p>Cargando detalle del producto... 🥟</p>
  }

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer