import styles from './PotionList.module.css'

export default function PotionList({ potions, onDelete }) {
  if (potions.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyText}>Nenhuma poção cadastrada ainda.</p>
        <p className={styles.emptyHint}>Adicione a primeira pelo formulário ao lado.</p>
      </div>
    )
  }

  return (
    <div className={styles.list}>
      <p className={styles.count}>{potions.length} {potions.length === 1 ? 'poção' : 'poções'} no estoque</p>
      {potions.map(potion => (
        <article key={potion.id} className={styles.item}>
          {potion.image && (
            <img
              src={potion.image}
              alt={potion.name}
              className={styles.thumb}
              loading="lazy"
            />
          )}
          <div className={styles.info}>
            <p className={styles.name}>{potion.name}</p>
            <p className={styles.desc}>{potion.description}</p>
            <p className={styles.price}>{potion.price.toLocaleString('pt-BR')} moedas</p>
          </div>
          <button
            type="button"
            className={styles.deleteBtn}
            onClick={() => onDelete(potion.id)}
            aria-label={`Remover ${potion.name}`}
          >
            Remover
          </button>
        </article>
      ))}
    </div>
  )
}
