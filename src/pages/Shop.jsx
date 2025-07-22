import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => (
  <section className="p-6">
    <h1 className="text-2xl font-bold mb-6">All Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

export default Shop;
