import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // ✅ Move this inside the component

  return (
    <div className="border p-4 rounded shadow hover:shadow-md">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
      </Link>
      <p className="text-pink-600 font-bold">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
