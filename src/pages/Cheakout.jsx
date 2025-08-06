import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { sendOrderEmail } from "../utils/SendEmail";

const Checkout = () => {
  const { cartItems, clearCart, updateOrderSummary } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    pinCode: "",
    city: "",
    state: "",
    paymentMethod: "cod",
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const requiredFields = ["firstName", "lastName", "email", "phone", "pinCode", "city", "state"];
    const isEmpty = requiredFields.some((field) => form[field].trim() === "");
    if (isEmpty) {
      toast.error("Please fill all required fields.");
      return;
    }

    // Save order summary for success page
    updateOrderSummary({
      name: `${form.firstName} ${form.lastName}`,
      address: `${form.city}, ${form.state} - ${form.pinCode}`,
      email: form.email,
      phone: form.phone,
      paymentMethod: form.paymentMethod,
      items: cartItems,
      total,
    });
    
const orderData = {
  name: `${form.firstName} ${form.lastName}`,
  email: form.email,
  phone: form.phone,
  address: `${form.city}, ${form.state} - ${form.pinCode}`,
  cartItems, // ✅ FIXED
  total
};
  console.log("Sending this order:", orderData);

  const success = await sendOrderEmail(orderData);


    toast.success("🎉 Order placed successfully!");
    clearCart();
    navigate("/checkout-success");
  };

  if (cartItems.length === 0) {
    return <div className="p-6 text-center text-lg">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="border px-4 py-2 rounded w-full"
        />
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="border px-4 py-2 rounded w-full"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border px-4 py-2 rounded w-full"
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border px-4 py-2 rounded w-full"
        />
        <input
          type="text"
          name="pinCode"
          value={form.pinCode}
          onChange={handleChange}
          placeholder="PIN Code"
          className="border px-4 py-2 rounded w-full"
        />
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="City"
          className="border px-4 py-2 rounded w-full"
        />
        <input
          type="text"
          name="state"
          value={form.state}
          onChange={handleChange}
          placeholder="State"
          className="border px-4 py-2 rounded w-full"
        />
        <div className="col-span-1 sm:col-span-2">
          <label className="block font-semibold mb-1">Payment Method</label>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          >
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>
      </div>

      <div className="border-t pt-4 mt-6">
        <h3 className="text-lg font-bold mb-2">Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between py-1 text-sm">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold border-t pt-2 mt-2 text-lg">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
