import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    setCart((prev) => {
      const existe = prev.find(
        (producto) => producto.id === item.id
      )

      if (existe) {
        return prev.map((producto) =>
          producto.id === item.id
            ? {
                ...producto,
                quantity: producto.quantity + quantity,
              }
            : producto
        )
      }

      return [
        ...prev,
        {
          ...item,
          quantity,
        },
      ]
    })
  }

  const removeItem = (itemId) => {
    setCart((prev) =>
      prev.filter((producto) => producto.id !== itemId)
    )
  }

  const clear = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.some((producto) => producto.id === id)
  }

  const totalItems = cart.reduce(
    (total, producto) => total + producto.quantity,
    0
  )

  const total = cart.reduce(
    (total, producto) =>
      total + producto.price * producto.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        totalItems,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}