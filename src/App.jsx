import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import ItemDetailPage from './pages/ItemDetailPage'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import Checkout from './pages/Checkout'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/category/:id"
            element={<Category />}
          />

          <Route
            path="/item/:id"
            element={<ItemDetailPage />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <p>
          © 2026 Manjar Empanadas - Todos los derechos
          reservados.
        </p>
      </footer>
    </>
  )
}

export default App