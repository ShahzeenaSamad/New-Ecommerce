// pages/index.tsx

import HeroSection from "./components/Hero";
import ProductsPage from "./products/page";



const Home = () => {
  return (
    <div>
      <>
      
      <HeroSection />  {/* Optional hero section for welcome message */}
      <h2 className="text-center mt-10 text-2xl font-semibold">Featured Products</h2>
      <ProductsPage />   {/* Display featured products or categories */}
      </>
    </div>
  );
};

export default Home;