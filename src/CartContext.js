import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartFromStorage = localStorage.getItem('cart');
        setCart(cartFromStorage ? JSON.parse(cartFromStorage) : []);
    }, []);

    const addToCart = (newItem) => {
        const itemExistsIndex = cart.findIndex(item => item.title === newItem.title);
        let updatedCart;
        if (itemExistsIndex !== -1) {
            updatedCart = [...cart];
            updatedCart[itemExistsIndex].quantity += newItem.quantity;
        } else {
            updatedCart = [...cart, newItem];
        }
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const updateQuantity = (id, newQuantity) => {
        let updatedCart;
        if (newQuantity > 0) {
            updatedCart = cart.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            );
        } else {
            updatedCart = cart.filter(item => item.id !== id);
        }
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
