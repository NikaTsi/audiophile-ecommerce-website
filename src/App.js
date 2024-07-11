import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Main from './pages/main';
import Headphones from './pages/headphones';
import Speakers from './pages/speakers';
import EarPhones from './pages/earphones';
import Product from './pages/product';
import Checkout from './pages/checkout';
import Header from './components/header';
import Footer from './components/footer';
import { CartContextProvider } from './CartContext';

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
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='/speakers' element={<Speakers />} />
          <Route path='/earphones' element={<EarPhones />} />
          <Route path='/:category/:productId' element={<Product />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;


