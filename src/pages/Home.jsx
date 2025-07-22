import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();
  const { orderSummary } = useCart(); // ✅ move here, inside the component

  return (

    <section className="p-6">
    
      <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/shop" className="bg-pink-600 text-white px-4 py-2 rounded">Shop All</Link>
      </div>

      {orderSummary && (
        <Link to="/checkout-success" className="text-blue-500 underline mt-4 inline-block">
          View My Last Order
        </Link>
      )}
    </section>

  );
};

export default Home;
