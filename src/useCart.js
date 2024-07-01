import { useState, useEffect } from 'react';

export default function useCart() {
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

    const removeFromCart = (title) => {
        const updatedCart = cart.filter(item => item.title !== title);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    return { cart, addToCart, removeFromCart, clearCart };
}
