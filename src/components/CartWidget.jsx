function CartWidget({ cantidad }) {
  return (
    <div className="cart-widget">
      <span>🛒</span>
      <span className="cart-badge">{cantidad}</span>
    </div>
  )
}

export default CartWidget