import { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

function ItemListContainer({ greeting, onAgregar, category }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const cargarProductos = async () => {
      const productos = await getProducts()

      if (category) {
        const productosFiltrados = productos.filter(
          (producto) =>
            producto.category.toLowerCase() === category.toLowerCase()
        )

        setItems(productosFiltrados)
      } else {
        setItems(productos)
      }
    }

    cargarProductos()
  }, [category])

  return (
    <section id="productos" className="productos">
      <h2>{greeting}</h2>

      <p>¡Descubrí todos nuestros sabores!</p>

      {items.length === 0 ? (
        <p>Cargando nuestras empanadas... 🥟</p>
      ) : (
        <ItemList
          items={items}
          onAgregar={onAgregar}
        />
      )}
    </section>
  )
}

export default ItemListContainer