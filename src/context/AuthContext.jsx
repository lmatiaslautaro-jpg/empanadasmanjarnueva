import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../firebase/config'

const AuthContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (usuario) => {
        setUser(usuario)
        setLoading(false)
      },
    )

    return unsubscribe
  }, [])

  const register = (email, password) => {
    return createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
  }

  const logout = () => {
    return signOut(auth)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}