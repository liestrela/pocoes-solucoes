import styles from './Spinner.module.css'

export default function Spinner() {
  return (
    <div className={styles.wrapper} role="status" aria-label="Carregando">
      <div className={styles.ring}></div>
    </div>
  )
}
