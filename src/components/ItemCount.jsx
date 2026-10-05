import { useState } from 'react'

function ItemCount({ stock, onAdd }) {
  const [cantidad, setCantidad] = useState(0)

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }

  const restar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <div className="item-count">
      <div className="contador">
        <button onClick={restar}>−</button>

        <strong>{cantidad}</strong>

        <button onClick={sumar}>+</button>
      </div>

      <button
        onClick={() => onAdd(cantidad)}
        disabled={cantidad === 0}
      >
        Agregar al pedido
      </button>
    </div>
  )
}

export default ItemCount