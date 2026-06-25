import styles from './ShopInfo.module.css'

export default function ShopInfo() {
  return (
    <>
      <section id="sobre" className={styles.description}>
        <div className={styles.inner}>
          <h2 className={styles.heading}>Sobre a Loja</h2>
          <p className={styles.body}>
            Poções &amp; Soluções foi fundada por Annabelle Merigold no Beco da Última Saída. A loja existe desde 1867. Somos uma loja bem-sucedida de poções.  
          </p>
        </div>
      </section>

      <section className={styles.history} id="historia">
        <div className={styles.historyInner}>
          <div className={styles.historyText}>
            <h2 className={styles.heading}>História</h2>
            <p className={styles.body}>
              Annabelle Merigold abriu a loja em 1867, no Beco da Última Saída. Após a pandemia de COVID-19,
              Annabelle decidiu criar este website de vendas online de seus produtos.
            </p>
          </div>
          <div className={styles.historyPhotos}>
            <figure className={styles.photoFrame}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Potions_Classroom_%286973086996%29.jpg"
                alt="sala de poções, 1867"
                className={styles.photo}
                loading="lazy"
              />
              <figcaption className={styles.photoCaption}>
                <span className={styles.photoYear}>1867</span>
                Fundação da loja
              </figcaption>
            </figure>
            <figure className={styles.photoFrame}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Potions_Classroom_%2840395286203%29.jpg"
                alt="sala de poções, 1923"
                className={styles.photo}
                loading="lazy"
              />
              <figcaption className={styles.photoCaption}>
                <span className={styles.photoYear}>1923</span>
                Reconstrução
              </figcaption>
            </figure>
            <figure className={styles.photoFrame}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Potions_Classroom_%2847307949392%29.jpg"
                alt="sala de poções, 1981"
                className={styles.photo}
                loading="lazy"
              />
              <figcaption className={styles.photoCaption}>
                <span className={styles.photoYear}>1981</span>
                Expansão do estoque
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}
