import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const OrderSuccess = () => {
  const { orderSummary } = useCart(); 
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const navigate = useNavigate();

  // Resize confetti on window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-redirect to home after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.removeItem("latestOrder");
      navigate("/");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <Confetti width={dimensions.width} height={dimensions.height} />
      <h1 className="text-3xl font-bold text-pink-600 mb-4">🎉 Thank You for Your Order!</h1>
      <p className="text-lg text-gray-700 mb-2">Your order has been placed successfully.</p>
         {orderSummary && (
        <div className="bg-white p-4 rounded shadow-md w-full max-w-md text-left">
          <h2 className="font-bold text-lg mb-2">Order Details:</h2>
          <p><strong>Order ID:</strong> {orderSummary.orderId}</p>
          <p><strong>Name:</strong> {orderSummary.name}</p>
          <p><strong>Address:</strong> {orderSummary.address}</p>
          <div className="mt-3 border-t pt-3">
            {orderSummary.items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm mb-1">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold border-t mt-2 pt-2">
              <span>Total:</span>
              <span>₹{orderSummary.total}</span>
            </div>
          </div>
        </div>
      )}
      <p className="text-sm text-gray-500">You’ll be redirected to the home page shortly...</p>
    </div>
  );
};

export default OrderSuccess;
