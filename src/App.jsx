import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import ItemDetailPage from './pages/ItemDetailPage'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/category/:id"
            element={<Category />}
          />

          <Route
            path="/item/:id"
            element={<ItemDetailPage />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
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