import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import ItemDetailPage from './pages/ItemDetailPage'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'

const PRECIO = 3000

function App() {
  const [carrito, setCarrito] = useState({})

  const agregarAlCarrito = (nombre, cantidad = 1) => {
    setCarrito((actual) => ({
      ...actual,
      [nombre]: (actual[nombre] || 0) + cantidad,
    }))
  }

  const quitarDelCarrito = (nombre) => {
    setCarrito((actual) => {
      const nuevoCarrito = { ...actual }

      if (nuevoCarrito[nombre] > 1) {
        nuevoCarrito[nombre] -= 1
      } else {
        delete nuevoCarrito[nombre]
      }

      return nuevoCarrito
    })
  }

  const cantidadTotal = Object.values(carrito).reduce(
    (total, cantidad) => total + cantidad,
    0
  )

  const total = cantidadTotal * PRECIO

  const salsasGratis = Math.floor(cantidadTotal / 12) * 3

  return (
    <>
      <Navbar cantidad={cantidadTotal} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                carrito={carrito}
                agregarAlCarrito={agregarAlCarrito}
                quitarDelCarrito={quitarDelCarrito}
                cantidadTotal={cantidadTotal}
                total={total}
                salsasGratis={salsasGratis}
              />
            }
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
  element={
    <Cart
      carrito={carrito}
      agregarAlCarrito={agregarAlCarrito}
      quitarDelCarrito={quitarDelCarrito}
      cantidadTotal={cantidadTotal}
      total={total}
      salsasGratis={salsasGratis}
    />
  }
/>

          <Route path="*" element={<NotFound />} />
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