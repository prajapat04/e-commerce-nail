import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
       <AuthProvider>
    <App />
    </AuthProvider>
    <Toaster position="top=right" toastOptions={{duration: 2000, style: {
      background: '#333',
      color: '#fff',
    },}} />
    </CartProvider>
  </React.StrictMode>
);