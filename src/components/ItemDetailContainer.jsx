import { useEffect, useState } from 'react'
import { getProductById } from '../services/getProductById'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const productoObtenido = await getProductById(1) // Cambia el ID según sea necesario
        setProducto(productoObtenido)
      } catch (error) {
        console.error(error)
      }
    }

    cargarProducto()
  }, [])

  if (!producto) {
    return <p>Cargando detalle del producto... 🥟</p>
  }

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer