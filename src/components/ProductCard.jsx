import styles from './ProductCard.module.css'

export default function ProductCard({ potion }) {
  const { name, description, image, price } = potion

  const comprar = () => {
    console.log("comprar ainda nao implementado")
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {image ? (
          <img src={image} alt={name} className={styles.image} loading="lazy" />
        ) : (
          <div className={styles.imageFallback} aria-hidden="true">🜭</div>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{price.toLocaleString('pt-BR')} moedas</span>
          <button className={styles.buyBtn} onClick={comprar} type="button">Comprar</button>
        </div>
      </div>
      <div className={styles.glowLayer} aria-hidden="true"></div>
    </article>
  )
}
