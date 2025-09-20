import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/Home';
import Collections from './components/collections/Collections';
import CTA from './components/marquee/CTA';
import NewestProducts from './components/products/NewestProducts';
import TrendingProducts from './components/products/TrendingProducts';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';
import Lenis from "lenis";
import 'lenis/dist/lenis.css'
import Loading from './loading';
import MarqueeText from './components/marquee-text';
import About2 from './components/about/about2';


const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    // Listen for the scroll event and log the event data
    lenis.on('scroll', () => {
    });
  }, []);

 const [isLoading, setIsLoading] = useState(true);
const [dataLoaded, setDataLoaded] = useState(false);
const [imagesLoaded, setImagesLoaded] = useState(false);

// fake fetch
useEffect(() => {
  async function fetchData() {
    await fetch("/api/whatever"); 
    setDataLoaded(true);
  }
  fetchData();
}, []);

useEffect(() => {
  const images = document.querySelectorAll("img");
  let loadedCount = 0;

  images.forEach((img) => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.addEventListener("load", () => {
        loadedCount++;
        if (loadedCount === images.length) setImagesLoaded(true);
      });
      img.addEventListener("error", () => {
        loadedCount++;
        if (loadedCount === images.length) setImagesLoaded(true);
      });
    }
  });

  if (loadedCount === images.length) {
    setImagesLoaded(true);
  }
}, []);

useEffect(() => {
  if (dataLoaded && imagesLoaded) {
    const timeout = setTimeout(() => setIsLoading(false), 3000); // show loader for 1s
    return () => clearTimeout(timeout);
  }
}, [dataLoaded, imagesLoaded]);




  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Navbar />
      <HomePage />
      <MarqueeText />
      <Collections />
      <MarqueeText />
      <NewestProducts />
      <TrendingProducts />
      <About />
      <About2 />
      <CTA />
      <Footer />
    </>
  )
}

export default App
