import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    setLoading(true)

    try {
      await register(email, password)
      navigate('/')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Ya existe una cuenta con ese email.')
      } else if (error.code === 'auth/invalid-email') {
        setError('Ingresá un email válido.')
      } else if (error.code === 'auth/weak-password') {
        setError('La contraseña es demasiado débil.')
      } else {
        setError('No se pudo crear la cuenta. Intentá nuevamente.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="productos">
      <h2>Crear cuenta</h2>

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
            minLength="6"
          />
        </label>

        <label>
          Repetir contraseña
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
            required
            minLength="6"
          />
        </label>

        {error && (
          <p className="mensaje-error">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? 'Creando cuenta...' : 'Crear cuenta'}
        </button>
      </form>

      <p>
        ¿Ya tenés una cuenta?{' '}
        <Link to="/login">
          Iniciá sesión
        </Link>
      </p>
    </section>
  )
}

export default Register
