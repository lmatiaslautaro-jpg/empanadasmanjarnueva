import { useCart } from '../context/CartContext'
import ItemListContainer from '../components/ItemListContainer'

const salsas = [
  'Chimi',
  'Cheddar',
  'BBQ',
  'Crema de ajo',
  'Criolla',
]

function Home() {
  const {
    cart,
    addItem,
    removeItem,
    totalItems,
    total,
  } = useCart()

  const salsasGratis = Math.floor(totalItems / 12) * 3

  return (
    <>
      <section id="inicio" className="hero">
        <h2>El sabor de lo casero</h2>

        <p>Empanadas artesanales hechas con amor.</p>

        <a href="#productos" className="boton">
          Ver nuestros productos
        </a>
      </section>

      <ItemListContainer
        greeting="¡Bienvenidos a Manjar Empanadas!"
      />

      <section id="salsas" className="productos">
        <h2>Nuestras salsas</h2>

        <p className="promo-salsas">
          ¡3 SALSAS GRATIS por cada 12 empanadas!
        </p>

        <div className="productos-grid">
          {salsas.map((nombre) => (
            <article className="producto-card" key={nombre}>
              <div className="producto-imagen">🥣</div>

              <h3>{nombre}</h3>

              <strong className="precio">GRATIS</strong>

              <p>
                Elegí tus salsas de regalo por cada 12 empanadas.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="carrito" className="productos">
        <h2>🛒 Mi pedido</h2>

        {totalItems === 0 ? (
          <p>
            Tu carrito está vacío. ¡Elegí tus empanadas favoritas!
          </p>
        ) : (
          <>
            <div className="carrito-lista">
              {cart.map((producto) => (
                <article
                  className="carrito-item"
                  key={producto.id}
                >
                  <h3>{producto.name}</h3>

                  <p>
                    {producto.quantity} x $
                    {producto.price.toLocaleString('es-AR')} = $
                    {(
                      producto.quantity * producto.price
                    ).toLocaleString('es-AR')}
                  </p>

                  <div className="carrito-controles">
                    <button
                      onClick={() => removeItem(producto.id)}
                    >
                      −
                    </button>

                    <strong>{producto.quantity}</strong>

                    <button
                      onClick={() => addItem(producto, 1)}
                    >
                      +
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="resumen-pedido">
              <h3>Total de empanadas: {totalItems}</h3>

              <h2>
                Total: ${total.toLocaleString('es-AR')}
              </h2>

              <p>🎁 Salsas gratis: {salsasGratis}</p>

              <p>
                {12 - (totalItems % 12) === 12
                  ? '¡Ya alcanzaste un múltiplo de 12!'
                  : `Te faltan ${
                      12 - (totalItems % 12)
                    } empanadas para el próximo regalo.`}
              </p>
            </div>
          </>
        )}
      </section>

      <section id="contacto" className="contacto">
        <h2>¡Hacé tu pedido!</h2>

        <p>
          Estamos listos para preparar algo delicioso para vos.
        </p>
      </section>
    </>
  )
}

export default Home