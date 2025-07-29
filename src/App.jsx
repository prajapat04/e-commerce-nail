import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Cheakout';
import OrderSuccess from './pages/OrderSuccess';
import CategoryPage from './pages/CategoryPage';
import AuthModal from './context/AuthModel';
import { useAuth } from './context/AuthContext';


function App() {
   const { showAuth, setShowAuth } = useAuth();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-success" element={<OrderSuccess />} />
        <Route path="/category/:name" element={<CategoryPage />} />
      </Routes>
       {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
       
    </Router>
  );
}

export default App;