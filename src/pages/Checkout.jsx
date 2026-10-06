import { useState } from 'react'
import {
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

function Checkout() {
  const { cart, total, clear } = useCart()
  const { user } = useAuth()

  const [formulario, setFormulario] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    extraInfo: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState('')
  const [orderTotal, setOrderTotal] = useState(0)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setError('')

    if (cart.length === 0) {
      setError('Tu carrito está vacío.')
      return
    }

    if (
      !formulario.name ||
      !formulario.phone ||
      !formulario.address ||
      !formulario.city
    ) {
      setError('Completá todos los campos obligatorios.')
      return
    }

    setLoading(true)

    try {
      const pedido = {
        userId: user.uid,
        userEmail: user.email,

        buyer: {
          name: formulario.name,
          phone: formulario.phone,
          address: formulario.address,
          city: formulario.city,
          extraInfo: formulario.extraInfo,
        },

        products: cart.map((producto) => ({
          id: producto.id,
          name: producto.name,
          unitPrice: producto.price,
          quantity: producto.quantity,
        })),

        total,
        createdAt: serverTimestamp(),
      }

      const documento = await addDoc(
        collection(db, 'orders'),
        pedido,
      )

      setOrderId(documento.id)
      setOrderTotal(total)

      clear()
    } catch (error) {
      console.error(
        'Error al guardar el pedido:',
        error,
      )

      setError(
        'No se pudo guardar el pedido. Intentá nuevamente.',
      )
    } finally {
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <section className="productos">
        <h2>✅ ¡Pedido realizado correctamente!</h2>

        <p>
          Gracias por tu compra, {formulario.name}.
        </p>

        <p>
          Tu pedido fue guardado correctamente.
        </p>

        <div className="resumen-pedido">
          <h3>ID de pedido:</h3>

          <strong>{orderId}</strong>

          <h3>
            Total: ${orderTotal.toLocaleString('es-AR')}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => {
            setOrderId('')
            setOrderTotal(0)

            setFormulario({
              name: '',
              phone: '',
              address: '',
              city: '',
              extraInfo: '',
            })
          }}
        >
          Realizar otro pedido
        </button>
      </section>
    )
  }

  return (
    <section className="productos">
      <h2>Finalizar compra</h2>

      <p>
        Completá tus datos para realizar el pedido.
      </p>

      <form
        onSubmit={handleSubmit}
        className="checkout-form"
      >
        <label>
          Nombre completo

          <input
            type="text"
            name="name"
            value={formulario.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Teléfono

          <input
            type="tel"
            name="phone"
            value={formulario.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Dirección

          <input
            type="text"
            name="address"
            value={formulario.address}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Ciudad

          <input
            type="text"
            name="city"
            value={formulario.city}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Información adicional

          <textarea
            name="extraInfo"
            value={formulario.extraInfo}
            onChange={handleChange}
          />
        </label>

        {error && (
          <p className="mensaje-error">
            {error}
          </p>
        )}

        <div className="resumen-pedido">
          <h3>
            Productos: {cart.length}
          </h3>

          <h2>
            Total: ${total.toLocaleString('es-AR')}
          </h2>
        </div>

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? 'Guardando pedido...'
            : 'Confirmar pedido'}
        </button>
      </form>
    </section>
  )
}

export default Checkout