import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      await login(email, password)
      navigate('/')
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        setError('El email o la contraseña son incorrectos.')
      } else if (error.code === 'auth/invalid-email') {
        setError('Ingresá un email válido.')
      } else {
        setError('No se pudo iniciar sesión. Intentá nuevamente.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="productos">
      <h2>Iniciar sesión</h2>

      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        {error && (
          <p className="mensaje-error">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? 'Ingresando...' : 'Iniciar sesión'}
        </button>
      </form>

      <p>
        ¿No tenés una cuenta?{' '}
        <Link to="/register">
          Registrate
        </Link>
      </p>
    </section>
  )
}

export default Login