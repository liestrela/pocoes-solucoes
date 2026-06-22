import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.col}>
            <p className={styles.colLabel}>Localização</p>
            <p className={styles.colText}>Beco da Última Saída, nº X</p>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>Horário</p>
            <p className={styles.colText}>Seg - Sex: das 08:00 às 18:00</p>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>Contato</p>
            <p className={styles.colText}>merigold@email.com</p>
          </div>
        </div>

        <p className={styles.copyright}>
          © 1867 – {new Date().getFullYear()} · Poções e Soluções
        </p>
      </div>
    </footer>
  )
}
