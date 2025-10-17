import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductsSection from './components/ProductsSection';
import NewArrival from "./components/NewArrival";
import BannerSection from "./components/SecondBannerSection";
import MostPopularSection from './components/MostPopularSection';
import ProductTabs from "./components/ProductTabs";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductsSection />
      <NewArrival />
      <BannerSection />
      <MostPopularSection />
      <ProductTabs />
    </>
  );
}

export default App;
