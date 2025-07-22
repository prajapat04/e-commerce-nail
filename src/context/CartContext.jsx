import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orderSummary, setOrderSummary] = useState(null);

 const updateOrderSummary = (order) => {
  const randomId = Math.random().toString(36).substring(2, 10).toUpperCase(); // e.g. A7X83FJ2
  const orderDate = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const fullOrder = {
    ...order,
    orderId: randomId,
    orderDate,
  };

  setOrderSummary(fullOrder);
  localStorage.setItem("latestOrder", JSON.stringify(fullOrder));
};


useEffect(() => {
  const saved = localStorage.getItem("latestOrder");
  if (saved) {
    setOrderSummary(JSON.parse(saved)); // ✅ Load from localStorage
  }
}, []);


  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    toast.success(`${product.name} added to cart! 🛒`);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems,
       addToCart,
        removeFromCart,
         clearCart,
         orderSummary,
         updateOrderSummary,
          }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
