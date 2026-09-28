import { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

function ItemListContainer({ greeting, onAgregar }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const cargarProductos = async () => {
      const productos = await getProducts()
      setItems(productos)
    }

    cargarProductos()
  }, [])

  return (
    <section id="productos" className="productos">
      <h2>{greeting}</h2>

      <p>¡Descubrí todos nuestros sabores!</p>

      {items.length === 0 ? (
        <p>Cargando nuestras empanadas... 🥟</p>
      ) : (
        <ItemList items={items} onAgregar={onAgregar} />
      )}
    </section>
  )
}

export default ItemListContainer