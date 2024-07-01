import React, { createContext, useContext } from 'react';
import useCart from './useCart';

const CartContext = createContext();

export function CartProvider({ children }) {
    const cart = useCart();
    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => useContext(CartContext);
