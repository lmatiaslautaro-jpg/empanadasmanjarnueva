import { Link } from 'react-router-dom'

function Item({ producto, onAgregar }) {
  return (
    <article className="producto-card">
      <Link
        to={`/item/${producto.id}`}
        className="producto-link"
      >
        <div className="producto-imagen">
          {producto.img}
        </div>

        <span className="detalle-categoria">
          {producto.category}
        </span>

        <h3>{producto.name}</h3>

        <p>{producto.description}</p>

        <strong className="precio">
          ${producto.price.toLocaleString('es-AR')}
        </strong>
      </Link>

      <button onClick={() => onAgregar(producto.name)}>
        Agregar al pedido
      </button>
    </article>
  )
}

export default Item