import { useEffect, useState } from 'react'
import {
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import ItemList from './ItemList'

function ItemListContainer({ greeting, onAgregar, category }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const cargarProductos = async () => {
      setLoading(true)
      setError('')

      try {
        const productosRef = collection(db, 'products')

        let consulta

        if (category) {
          consulta = query(
            productosRef,
            where('category', '==', category),
          )
        } else {
          consulta = productosRef
        }

        const snapshot = await getDocs(consulta)

        const productos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setItems(productos)
      } catch (error) {
        console.error(
          'Error al cargar productos desde Firestore:',
          error,
        )

        setError(
          'No se pudieron cargar las empanadas. Intentá nuevamente.',
        )
      } finally {
        setLoading(false)
      }
    }

    cargarProductos()
  }, [category])

  return (
    <section id="productos" className="productos">
      <h2>{greeting}</h2>

      <p>¡Descubrí todos nuestros sabores!</p>

      {loading && (
        <p>Cargando nuestras empanadas... 🥟</p>
      )}

      {!loading && error && (
        <p>{error}</p>
      )}

      {!loading && !error && (
        <ItemList
          items={items}
          onAgregar={onAgregar}
        />
      )}
    </section>
  )
}

export default ItemListContainer