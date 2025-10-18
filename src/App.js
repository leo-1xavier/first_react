import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import NewArrival from "./components/NewArrival";
import BannerSection from "./components/SecondBannerSection";
import MostPopularSection from './components/MostPopularSection';
import ProductsSection from "./components/ProductsSection";
import NewArrivalCarousel from "./components/NewArrivalCarousel";
import Promises from "./components/Promises";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductsSection />
      <NewArrival />
      <BannerSection />
      <MostPopularSection />
      <NewArrivalCarousel />
      <Promises />
      <SideNav />
      <Footer />
    </>
  );
}

export default App;



