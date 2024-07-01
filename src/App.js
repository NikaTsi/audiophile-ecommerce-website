import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Main from "./pages/main";
import Headphones from "./pages/headphones";
import Speakers from './pages/speakers';
import EarPhones from './pages/earphones';
import Product from './pages/product';
import { CartProvider } from './CartContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='/speakers' element={<Speakers />} />
          <Route path='/earphones' element={<EarPhones />} />
          <Route path="/:category/:productId" element={<Product />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;