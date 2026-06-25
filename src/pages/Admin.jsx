import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPotions, createPotion, deletePotion, isAuthenticated, logout } from '../services/api.js'
import Header from '../components/Header.jsx'
import PotionForm from '../components/admin/PotionForm.jsx'
import PotionList from '../components/admin/PotionList.jsx'
import Spinner from '../components/ui/Spinner.jsx'
import styles from './Admin.module.css'

export default function Admin() {
  const navigate = useNavigate()
  const [potions, setPotions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login')
      return
    }
    getPotions()
      .then(data => {
        setPotions(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Não foi possível carregar os dados. Tente novamente mais tarde.')
        setLoading(false)
      })
  }, [])

  function handleLogout() {
    logout()
    navigate('/login')
  }

  async function handleAdd(data) {
    try {
      const created = await createPotion(data)
      setPotions(prev => [...prev, created])
    } catch {
      const localPotion = { ...data, id: Date.now() }
      setPotions(prev => [...prev, localPotion])
    }
  }

  async function handleDelete(id) {
    try {
      await deletePotion(id)
    } catch {}
    setPotions(prev => prev.filter(p => p.id !== id))
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.titleBar}>
          <h1 className={styles.title}>Painel Administrativo</h1>
          <button className={styles.logoutBtn} onClick={handleLogout}>Sair</button>
        </div>

        {loading ? (
          <Spinner />
        ) : error ? (
          <p className={styles.errorMsg}>{error}</p>
        ) : (
          <div className={styles.panels}>
            <aside className={styles.formPanel}>
              <PotionForm onAdd={handleAdd} />
            </aside>
            <section className={styles.listPanel} aria-label="Lista de poções cadastradas">
              <PotionList potions={potions} onDelete={handleDelete} />
            </section>
          </div>
        )}
      </main>
    </>
  )
}
