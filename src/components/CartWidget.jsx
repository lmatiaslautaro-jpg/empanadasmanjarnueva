import { useCart } from '../context/CartContext'

function CartWidget() {
  const { totalItems } = useCart()

  return (
    <div className="cart-widget">
      <span>🛒</span>

      {totalItems > 0 && (
        <span className="cart-badge">
          {totalItems}
        </span>
      )}
    </div>
  )
}

export default CartWidget