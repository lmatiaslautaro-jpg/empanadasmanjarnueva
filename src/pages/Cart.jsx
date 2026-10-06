import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const {
    cart,
    removeItem,
    clear,
    totalItems,
    total,
  } = useCart()

  if (cart.length === 0) {
    return (
      <section className="productos">
        <h2>🛒 Mi carrito</h2>

        <p>
          Tu carrito está vacío. ¡Elegí tus empanadas favoritas!
        </p>

        <Link to="/" className="boton">
          Volver al catálogo
        </Link>
      </section>
    )
  }

  return (
    <section className="productos">
      <h2>🛒 Mi carrito</h2>

      <div className="carrito-lista">
        {cart.map((producto) => {
          const subtotal =
            producto.price * producto.quantity

          return (
            <article
              className="carrito-item"
              key={producto.id}
            >
              <h3>{producto.name}</h3>

              <p>
                Precio unitario: $
                {producto.price.toLocaleString('es-AR')}
              </p>

              <p>
                Cantidad: {producto.quantity}
              </p>

              <p>
                Subtotal: $
                {subtotal.toLocaleString('es-AR')}
              </p>

              <button
                onClick={() => removeItem(producto.id)}
              >
                Eliminar
              </button>
            </article>
          )
        })}
      </div>

      <div className="resumen-pedido">
        <h3>Total de productos: {totalItems}</h3>

        <h2>
          Total: ${total.toLocaleString('es-AR')}
        </h2>

        <button onClick={clear}>
          Vaciar carrito
        </button>

        <Link to="/checkout" className="boton">
          Finalizar compra
        </Link>
      </div>
    </section>
  )
}

export default Cart