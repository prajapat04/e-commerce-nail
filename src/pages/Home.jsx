import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

import BannerSlider from "../components/Banner";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import About from "./About";
import Footer from "../components/Footer";

const Home = () => {
  const { user } = useAuth();
  const { orderSummary } = useCart();

  return (
    <section className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* 🔄 Banner Slider */}
      <BannerSlider />


      {/* 🧩 Categories (optional section) */}
      <CategorySection />

      {/* 🛍️ Featured Products Slider */}
      <FeaturedProducts />

      {/* 🔗 Shop All button */}
      <div className="mt-10 text-center mb-8">
        <Link
          to="/shop"
          className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded shadow-md"
        >
          Shop All Products
        </Link>
      </div>

      {/* 🧾 View Last Order */}
      {orderSummary && (
        <div className="mt-6 text-center">
          <Link
            to="/checkout-success"
            className="text-blue-600 hover:underline font-medium"
          >
            View My Last Order
          </Link>
        </div>
      )}

      <About />
      <Footer />
    </section>
  );
};

export default Home;
