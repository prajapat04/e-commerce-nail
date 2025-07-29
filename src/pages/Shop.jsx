import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search") || "";
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    if (query.trim()) {
      setFiltered(
        products.filter(p =>
          p.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFiltered(products);
    }
  }, [query]);

  return (
    <section className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {query ? `Search Results for "${query}"` : "All Products"}
      </h1>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </section>
  );
};

export default Shop;
