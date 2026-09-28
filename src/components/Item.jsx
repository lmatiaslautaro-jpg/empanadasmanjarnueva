    function Item({ producto, onAgregar }) {
  return (
    <article className="producto-card">
      <div className="producto-imagen">
        {producto.img}
      </div>

      <h3>{producto.name}</h3>

      <p>{producto.description}</p>

      <strong className="precio">
        ${producto.price.toLocaleString('es-AR')}
      </strong>

      <button onClick={() => onAgregar(producto.name)}>
        Agregar al pedido
      </button>
    </article>
  )
}

export default Item