import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  const location = useLocation()
  const isAdmin = location.pathname === '/admin'
  const [open, setOpen] = useState(false)

  function close() { setOpen(false) }

  return (
    <header className={styles.header}>
      <a href={isAdmin ? '/' : '#inicio'} className={styles.brand} onClick={close}>
        <span className={styles.brandMain}>Poções &amp; Soluções</span>
      </a>

      <nav className={styles.nav} aria-label="Navegação principal">
        {isAdmin ? (
          <Link to="/" className={styles.navLink}>← Loja</Link>
        ) : (
          <>
            <a href="#sobre" className={styles.navLink}>Sobre</a>
            <a href="#historia" className={styles.navLink}>História</a>
            <a href="#produtos" className={styles.navLink}>Produtos</a>
            <a href="#contato" className={styles.navLink}>Contato</a>
            <Link to="/admin" className={styles.navLinkAdmin}>Painel Admin</Link>
          </>
        )}
      </nav>

      <button
        className={styles.hamburger}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
      >
        <span className={`${styles.bar} ${open ? styles.barTop : ''}`}></span>
        <span className={`${styles.bar} ${open ? styles.barMid : ''}`}></span>
        <span className={`${styles.bar} ${open ? styles.barBot : ''}`}></span>
      </button>

      {open && (
        <div className={styles.drawer} role="dialog" aria-label="Menu de navegação">
          {isAdmin ? (
            <Link to="/" className={styles.drawerLink} onClick={close}>← Loja</Link>
          ) : (
            <>
              <a href="#sobre" className={styles.drawerLink} onClick={close}>Sobre</a>
              <a href="#historia" className={styles.drawerLink} onClick={close}>História</a>
              <a href="#produtos" className={styles.drawerLink} onClick={close}>Produtos</a>
              <a href="#contato" className={styles.drawerLink} onClick={close}>Contato</a>
              <Link to="/admin" className={styles.drawerLinkAdmin} onClick={close}>Painel Admin</Link>
            </>
          )}
        </div>
      )}
    </header>
  )
}
