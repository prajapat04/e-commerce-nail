import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6 text-red-500">Product not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[400px] object-cover rounded"
      />
      <div>
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-bold text-pink-600 mb-4">₹{product.price}</p>
        <button onClick={() => addToCart(product)} className="bg-pink-600 text-white px-5 py-2 rounded hover:bg-pink-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
