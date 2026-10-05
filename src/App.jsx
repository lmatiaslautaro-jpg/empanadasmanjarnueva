import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

const salsas = [
  'Chimi',
  'Cheddar',
  'BBQ',
  'Crema de ajo',
  'Criolla',
]

const PRECIO = 3000

function App() {
  const [carrito, setCarrito] = useState({})

  const agregarAlCarrito = (nombre) => {
    setCarrito((actual) => ({
      ...actual,
      [nombre]: (actual[nombre] || 0) + 1,
    }))
  }

  const quitarDelCarrito = (nombre) => {
    setCarrito((actual) => {
      const nuevoCarrito = { ...actual }

      if (nuevoCarrito[nombre] > 1) {
        nuevoCarrito[nombre] -= 1
      } else {
        delete nuevoCarrito[nombre]
      }

      return nuevoCarrito
    })
  }

  const cantidadTotal = Object.values(carrito).reduce(
    (total, cantidad) => total + cantidad,
    0
  )

  const total = cantidadTotal * PRECIO

  const salsasGratis = Math.floor(cantidadTotal / 12) * 3

  return (
    <>
      <Navbar />

      <main>
        <section id="inicio" className="hero">
          <h2>El sabor de lo casero</h2>

          <p>Empanadas artesanales hechas con amor.</p>

          <a href="#productos" className="boton">
            Ver nuestros productos
          </a>
        </section>

        <ItemListContainer
          greeting="¡Bienvenidos a Manjar Empanadas!"
          onAgregar={agregarAlCarrito}
        />

        <section id="detalle" className="productos">
          <h2>Detalle del producto</h2>

          <ItemDetailContainer />
        </section>

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

                <p>Elegí tus salsas de regalo por cada 12 empanadas.</p>
              </article>
            ))}
          </div>
        </section>

        <section id="carrito" className="productos">
          <h2>🛒 Mi pedido</h2>

          {cantidadTotal === 0 ? (
            <p>Tu carrito está vacío. ¡Elegí tus empanadas favoritas!</p>
          ) : (
            <>
              <div className="carrito-lista">
                {Object.entries(carrito).map(([nombre, cantidad]) => (
                  <article className="carrito-item" key={nombre}>
                    <h3>{nombre}</h3>

                    <p>
                      {cantidad} x $3.000 = $
                      {(cantidad * PRECIO).toLocaleString('es-AR')}
                    </p>

                    <div className="carrito-controles">
                      <button onClick={() => quitarDelCarrito(nombre)}>
                        −
                      </button>

                      <strong>{cantidad}</strong>

                      <button onClick={() => agregarAlCarrito(nombre)}>
                        +
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="resumen-pedido">
                <h3>Total de empanadas: {cantidadTotal}</h3>

                <h2>
                  Total: ${total.toLocaleString('es-AR')}
                </h2>

                <p>🎁 Salsas gratis: {salsasGratis}</p>

                <p>
                  {12 - (cantidadTotal % 12) === 12
                    ? '¡Ya alcanzaste un múltiplo de 12!'
                    : `Te faltan ${12 - (cantidadTotal % 12)} empanadas para el próximo regalo.`}
                </p>
              </div>
            </>
          )}
        </section>

        <section id="contacto" className="contacto">
          <h2>¡Hacé tu pedido!</h2>

          <p>Estamos listos para preparar algo delicioso para vos.</p>
        </section>
      </main>

      <footer>
        <p>
          © 2026 Manjar Empanadas - Todos los derechos reservados.
        </p>
      </footer>
    </>
  )
}

export default App