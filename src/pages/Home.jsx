import Hero from "../components/Hero"
import ProductCategories from "../components/ProductCategories"
import RecentProducts from "../components/RecentProducts"
import SaleProducts from "../components/SaleProducts"
import TopBrand from "../components/TopBrand"

const Home = () => {
  return (
    <div className="container">
        {/* hero section */}
        <Hero />
        <RecentProducts />
        <ProductCategories />
        <SaleProducts />
        <TopBrand />
    </div>
  )
}

export default Home