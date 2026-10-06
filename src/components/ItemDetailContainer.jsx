import { useEffect, useState } from 'react'
import {
  doc,
  getDoc,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import ItemDetail from './ItemDetail'

function ItemDetailContainer({ productId }) {
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const cargarProducto = async () => {
      setLoading(true)
      setError('')

      try {
        const productoRef = doc(
          db,
          'products',
          productId,
        )

        const productoSnap = await getDoc(productoRef)

        if (!productoSnap.exists()) {
          setError('No encontramos ese producto.')
          setProducto(null)
          return
        }

        setProducto({
          id: productoSnap.id,
          ...productoSnap.data(),
        })
      } catch (error) {
        console.error(
          'Error al cargar el producto desde Firestore:',
          error,
        )

        setError(
          'No se pudo cargar el detalle del producto.',
        )
      } finally {
        setLoading(false)
      }
    }

    cargarProducto()
  }, [productId])

  if (loading) {
    return <p>Cargando detalle del producto... 🥟</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer