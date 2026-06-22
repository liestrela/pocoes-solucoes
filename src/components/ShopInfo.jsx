import styles from './ShopInfo.module.css'

export default function ShopInfo() {
  return (
    <>
      <section className={styles.description}>
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
            <div className={styles.photoFrame}>
              <div className={styles.photoPlaceholder}>
                <span className={styles.photoYear}>1867</span>
                <span className={styles.photoCaption}>Fundação da loja</span>
              </div>
            </div>
            <div className={styles.photoFrame}>
              <div className={styles.photoPlaceholder}>
                <span className={styles.photoYear}>1923</span>
                <span className={styles.photoCaption}>Reconstrução</span>
              </div>
            </div>
            <div className={styles.photoFrame}>
              <div className={styles.photoPlaceholder}>
                <span className={styles.photoYear}>1981</span>
                <span className={styles.photoCaption}>Expansão do estoque</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
