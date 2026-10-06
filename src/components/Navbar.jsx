import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-logo">
        MANJAR EMPANADAS
      </NavLink>

      <nav className="navbar-categorias">
        <NavLink to="/category/Carnes">
          Carnes
        </NavLink>

        <NavLink to="/category/Pollo">
          Pollo
        </NavLink>

        <NavLink to="/category/Clásicas">
          Clásicas
        </NavLink>

        <NavLink to="/category/Vegetarianas">
          Vegetarianas
        </NavLink>

        <NavLink to="/category/Especiales">
          Especiales
        </NavLink>
      </nav>

      <div className="navbar-usuario">
        {user ? (
          <>
            <span>
              👤 {user.email}
            </span>

            <button onClick={logout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              Iniciar sesión
            </NavLink>

            <NavLink to="/register">
              Crear cuenta
            </NavLink>
          </>
        )}
      </div>

      <NavLink to="/cart" className="cart-link">
        <CartWidget />
      </NavLink>
    </header>
  )
}

export default Navbar