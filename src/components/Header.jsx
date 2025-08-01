import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import AuthModal from '../context/AuthModel';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const whatsappURL = "https://wa.me/918290726836?text=Hi%20NailShop%2C%20I%20have%20a%20query!";

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    if (query) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
      setSearch("");
      setMenuOpen(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);
  const closeCart = () => setCartOpen(false);

  return (
    <header className=" bg shadow-sm px-6 py-4 sticky top-0 z-50 border-b border-white/30">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Hamburger */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden text-pink-600">
          <Menu size={24} />
        </button>

        {/* Center: Logo */}
        <Link to="/" className="text-xl font-bold text-pink-600 flex-1 text-center md:text-left md:flex-none">
          NailShop
        </Link>

        {/* Desktop Search */}
        <form onSubmit={handleSearch} className="hidden md:flex max-w-md mx-auto w-full">
          <div className="relative w-full">
            <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-pink-500"
            />
          </div>
        </form>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center gap-8 text-sm sm:text-base">
          <Link to="/" className="hover:text-pink-600 m-auto">Home</Link>
          <Link to="/shop" className="hover:text-pink-600 m-auto">Shop</Link>
          <a href="#about" className="hover:text-pink-600 m-auto">About</a>
          <a href="#contact" className="hover:text-pink-600 m-auto">Contact</a>
          {user ? (
            <>
              <span className="text-sm">Hi, {user.name}</span>
              <button onClick={logout} className="bg-red-500 text-white px-4 py-1 rounded-2xl hover:scale-105">
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowAuth(true)}
              className="bg-pink-600 text-white px-3 py-1.5 rounded"
            >
              Login
            </button>
          )}
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/cart')}
            className="relative hover:text-pink-600"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
           
        </div>
      </div>

      {/* === Overlay === */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={closeMenu}></div>
      )}


      {/* === Slide-in Mobile Menu === */}
      <div className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg z-50 transform transition-transform duration-700 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <span className="text-lg font-semibold text-pink-600">Menu</span>
          <button onClick={closeMenu}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSearch} className="px-4 py-4">
          <input
            type="text"
            name="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-full py-2 px-4"
          />
           <Search size={18} className="absolute right-8 top-20 text-gray-400" />

        </form>

        <div className="px-6 flex flex-col space-y-4 text-sm sm:text-base">
          <Link to="/" onClick={closeMenu} className="hover:text-pink-600">Home</Link>
          <Link to="/shop" onClick={closeMenu} className="hover:text-pink-600">Shop</Link>
          <a href="#about" onClick={closeMenu} className="hover:text-pink-600">About</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-pink-600">Contact</a>
          {user ? (
            <>
              <span className="text-sm">Hi, {user.name}</span>
              <button onClick={logout} className="bg-red-500 text-white px-4 py-1 rounded-2xl hover:scale-105">
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowAuth(true)}
              className="bg-pink-600 text-white px-3 py-1.5 rounded"
            >
              Login
            </button>
          )}
        </div>
      </div>
 <a
  href={whatsappURL}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp size={24} />
</a>

    

      {/* === Auth Modal === */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </header>
  );
};

export default Header;
