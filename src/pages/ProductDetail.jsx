import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p className="p-6 text-red-500">Product not found.</p>;

  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || product.image // ✅ Safe fallback
  );

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Left: Images */}
      <div className="flex-1">
        <img
          src={selectedImage}
          alt={product.name}
          className="w-full max-h-[500px] rounded object-contain mb-4"
        />

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto">
          {product.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 object-cover border cursor-pointer rounded transition-all ${
                selectedImage === img ? "border-pink-500 ring-2 ring-pink-300" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right: Info */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-pink-600 font-semibold text-xl my-2">₹{product.price}</p>
        <p className="mb-4 text-sm text-gray-600">{product.description}</p>

        <button
          onClick={() => addToCart(product)}
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
