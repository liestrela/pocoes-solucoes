import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/api.js'
import styles from './Login.module.css'

export default function Login() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await login(password)
      navigate('/admin')
    } catch {
      setError('Senha incorreta. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <a href="/" className={styles.back}>← Voltar à loja</a>
        <p className={styles.brand}>Poções &amp; Soluções</p>
        <h1 className={styles.title}>Acesso Restrito</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            className={styles.input}
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus
            required
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? 'Verificando…' : 'Entrar'}
          </button>
        </form>
      </div>
    </main>
  )
}
