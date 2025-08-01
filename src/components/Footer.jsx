import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from 'lucide-react';
const Footer = () => {
    const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <footer id="contact" className="bg text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-2">NailShop</h2>
          <p className="text-sm">Be beautiful. Be confident. Be you.</p>
          <div className="flex gap-3 mt-2">
          <a  href="#"><Facebook /></a>
           <a href="#"><Instagram /></a>
             <a href="#"><Linkedin /></a>         
        </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/"  onClick={handleHomeClick} className="hover:text-pink-600">Home</Link></li>
            <li><Link to="/shop" className="hover:text-pink-600">Shop</Link></li>
            <li><Link to="/about" className="hover:text-pink-600">About</Link></li>
            <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="text-sm space-y-1">
            <li>📞 +91-9876543210</li>
            <li>✉️ hello@nailshop.in</li>
            <li>📍 Sujangarh, Rajasthan, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm  py-4 bg-white">
        © {new Date().getFullYear()} NailShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
