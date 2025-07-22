import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const Checkout = () => {
  const { cartItems, clearCart, updateOrderSummary } = useCart();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    if (!name || !address) {
      toast.error("Please fill in your name and address.");
      return;
    }

      updateOrderSummary({
    name,
    address,
    items: cartItems,
    total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
  });

    toast.success("🎉 Order placed successfully!");
    clearCart();
    navigate("/checkout-success");
  };

  if (cartItems.length === 0) {
    return <div className="p-6 text-center text-lg">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="mb-6">
        <label className="block mb-2 font-semibold">Full Name</label>
        <input
          className="w-full border px-4 py-2 rounded"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold">Shipping Address</label>
        <textarea
          className="w-full border px-4 py-2 rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="123, Main Street, City, ZIP"
        />
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-bold mb-2">Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between py-1">
            <span>{item.name} × {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold border-t pt-2 mt-2">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button
        onClick={handleOrder}
        className="mt-6 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
