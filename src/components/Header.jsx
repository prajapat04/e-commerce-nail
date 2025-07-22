// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { cartItems } = useCart();
   const { user, logout } = useAuth();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold text-pink-600">NailShop</Link>
      <nav className="space-x-6 text-sm sm:text-base">
        <Link to="/" className="hover:text-pink-600">Home</Link>
        <Link to="/shop" className="hover:text-pink-600">Shop</Link>
        <Link to="/about" className="hover:text-pink-600">About</Link>
        <Link to="/contact" className="hover:text-pink-600">Contact</Link>
        <Link to="/cart" className="relative inline-block hover:text-pink-600">
          🛒 Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
         {user && (
        <div>
          <span className="mr-4">{user.name}</span>
          <button onClick={logout} className="text-red-500 underline">
            Logout
          </button>
        </div>
      )}
      </nav>
    </header>
  );
};

export default Header;
