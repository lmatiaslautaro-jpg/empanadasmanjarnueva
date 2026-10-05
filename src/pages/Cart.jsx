function Cart({
  carrito,
  agregarAlCarrito,
  quitarDelCarrito,
  cantidadTotal,
  total,
  salsasGratis,
}) {
  return (
    <section className="productos">
      <h2>🛒 Mi pedido</h2>

      {cantidadTotal === 0 ? (
        <p>
          Tu carrito está vacío. ¡Elegí tus empanadas favoritas!
        </p>
      ) : (
        <>
          <div className="carrito-lista">
            {Object.entries(carrito).map(([nombre, cantidad]) => (
              <article className="carrito-item" key={nombre}>
                <h3>{nombre}</h3>

                <p>
                  {cantidad} x $3.000 = $
                  {(cantidad * 3000).toLocaleString('es-AR')}
                </p>

                <div className="carrito-controles">
                  <button
                    onClick={() => quitarDelCarrito(nombre)}
                  >
                    −
                  </button>

                  <strong>{cantidad}</strong>

                  <button
                    onClick={() => agregarAlCarrito(nombre)}
                  >
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
                : `Te faltan ${
                    12 - (cantidadTotal % 12)
                  } empanadas para el próximo regalo.`}
            </p>
          </div>
        </>
      )}
    </section>
  )
}

export default Cart