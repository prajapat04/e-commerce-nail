import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Featured Products</h2>
        <Link to="/shop" className="text-pink-600 hover:underline text-sm">
          View All
        </Link>
      </div>

      {/* Responsive Scrollable List on Mobile, Grid on Desktop */}
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 no-scrollbar">
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="min-w-[240px] md:min-w-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
