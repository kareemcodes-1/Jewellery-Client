import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/Home';
import Collections from './components/collections/Collections';
import CTA from './components/marquee/CTA';
import NewestProducts from './components/products/NewestProducts';
import TrendingProducts from './components/products/TrendingProducts';
import About from './components/about/About';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Collections />
      <NewestProducts />
      <TrendingProducts />
      <About />
      <CTA />
      <Footer />
    </>
  )
}

export default App
