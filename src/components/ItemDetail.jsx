import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'

function ItemDetail({ producto }) {
  const { addItem } = useCart()

  const agregarAlPedido = (cantidad) => {
    addItem(producto, cantidad)
  }

  return (
    <section className="detalle-producto">
      <div className="detalle-imagen">
        {producto.img}
      </div>

      <div className="detalle-info">
        <span className="detalle-categoria">
          {producto.category}
        </span>

        <h2>{producto.name}</h2>

        <p className="detalle-descripcion">
          {producto.description}
        </p>

        <strong className="detalle-precio">
          ${producto.price.toLocaleString('es-AR')}
        </strong>

        <p className="detalle-stock">
          Stock disponible: {producto.stock}
        </p>

        <ItemCount
          stock={producto.stock}
          onAdd={agregarAlPedido}
        />
      </div>
    </section>
  )
}

export default ItemDetail