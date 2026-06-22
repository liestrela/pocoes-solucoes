import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-label="Cabeçalho da loja">
      <div className={styles.content}>
        <h1 className={styles.title}>Poções &amp;<br />Soluções</h1>
        <p className={styles.tagline}>
          por Anabelle Merigold
        </p>
        <a href="#produtos" className={styles.cta}>Clique aqui para ver o estoque</a>
      </div>
    </section>
  )
}
