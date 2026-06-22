import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import ShopInfo from '../components/ShopInfo.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import Footer from '../components/Footer.jsx'

export default function Storefront() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ShopInfo />
        <ProductGrid />
      </main>
      <Footer />
    </>
  )
}
