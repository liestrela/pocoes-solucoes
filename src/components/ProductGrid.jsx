import { useState, useEffect } from 'react'
import { getPotions } from '../services/api.js'
import ProductCard from './ProductCard.jsx'
import Spinner from './ui/Spinner.jsx'
import styles from './ProductGrid.module.css'

export default function ProductGrid() {
  const [potions, setPotions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPotions()
      .then(data => {
        setPotions(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <section className={styles.section} id="produtos">
      <div className={styles.header}>
        <h2 className={styles.heading}>Poções disponíveis</h2>
      </div>

      {loading && <Spinner />}

      {error && (
        <p className={styles.errorMsg}>
          Não foi possível carregar o estoque. Tente novamente mais tarde.
        </p>
      )}

      {!loading && !error && potions.length === 0 && (
        <p className={styles.emptyMsg}>
          O estoque está vazio. Volte em breve.
        </p>
      )}

      {!loading && !error && potions.length > 0 && (
        <div className={styles.grid}>
          {potions.map(potion => (
            <ProductCard key={potion.id} potion={potion} />
          ))}
        </div>
      )}
    </section>
  )
}
