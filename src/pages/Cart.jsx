import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity,
    decreaseQuantity, clearCart } = useCart();
  const { user, setShowAuth } = useAuth();
  const navigate = useNavigate();
   
  const handleCheckout = () => {
    if (!user) {
      toast.error("Please login to proceed");
     setShowAuth(true);
      return;
    }

    navigate("/checkout");
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">Your cart is empty 🛒</h2>
        <Link to="/shop" className="text-pink-600 underline">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center gap-4">
            <img src={item.image} className="w-20 h-20 object-cover rounded" />
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p>Qty: {item.quantity}</p>
              <p>Price: ₹{item.price}</p>
               <button
              onClick={() => decreaseQuantity(item.id)}
              className="px-2 py-0.5 border rounded"
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              onClick={() => increaseQuantity(item.id)}
              className="px-2 py-0.5 border rounded"
            >
              +
            </button>
            </div>
          </div>
          
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="text-right mt-6">
        <p className="text-xl font-bold">Total: ₹{total}</p>
        <button
          onClick={clearCart}
          className="mt-2 bg-red-500 text-white px-4 py-2 mx-1 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
         <button
            onClick={handleCheckout}
            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
          >
            Proceed to Checkout
          </button>
      </div>
    </div>
  );
};

export default Cart;
