import CartWidget from './CartWidget'

function Navbar() {
  return (
    <header className="navbar">
      <a href="#inicio" className="navbar-logo">
        MANJAR EMPANADAS
      </a>

      <nav className="navbar-categorias">
        <a href="#productos">Carne</a>
        <a href="#productos">Pollo</a>
        <a href="#productos">Jamón y queso</a>
        <a href="#productos">Vegetarianas</a>
        <a href="#salsas">Salsas</a>
      </nav>

      <CartWidget />
    </header>
  )
}

export default Navbar