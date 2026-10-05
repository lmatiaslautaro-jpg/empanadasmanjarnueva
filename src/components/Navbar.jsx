import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

function Navbar({ cantidad }) {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-logo">
        MANJAR EMPANADAS
      </NavLink>

      <nav className="navbar-categorias">
        <NavLink to="/category/Carnes">Carnes</NavLink>

        <NavLink to="/category/Pollo">Pollo</NavLink>

        <NavLink to="/category/Clásicas">Clásicas</NavLink>

        <NavLink to="/category/Vegetarianas">
          Vegetarianas
        </NavLink>

        <NavLink to="/category/Especiales">
          Especiales
        </NavLink>
      </nav>

      <NavLink to="/cart" className="cart-link">
        <CartWidget cantidad={cantidad} />
      </NavLink>
    </header>
  )
}

export default Navbar