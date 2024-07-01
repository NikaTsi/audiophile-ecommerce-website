import React, { useState, useEffect } from 'react';
import { useCartContext } from '../CartContext';

export default function CartBox() {
    const { cart, clearCart } = useCartContext();
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const initialQuantities = {};
        storedCart.forEach(item => {
            initialQuantities[item.id] = item.quantity;
        });
        setQuantities(initialQuantities);
    }, []);

    useEffect(() => {
        if (Object.keys(quantities).length > 0) {
            const updatedCart = cart.map(item => ({
                ...item,
                quantity: quantities[item.id]
            }));
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    }, [quantities, cart]);

    const addToCart = (item) => {
        const updatedQuantities = {
            ...quantities,
            [item.id]: (quantities[item.id] || 0) + item.quantity
        };
        setQuantities(updatedQuantities);
        updateCartInLocalStorage(updatedQuantities);
    };

    const updateQuantity = (id, newQuantity) => {
        const updatedQuantities = {
            ...quantities,
            [id]: newQuantity
        };
        setQuantities(updatedQuantities);
        updateCartInLocalStorage(updatedQuantities);
    };

    const updateCartInLocalStorage = (newQuantities) => {
        const updatedCart = cart.map(item => ({
            ...item,
            quantity: newQuantities[item.id] || 0
        }));
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const incrementQuantity = (id) => {
        updateQuantity(id, (quantities[id] || 0) + 1);
    };

    const decrementQuantity = (id) => {
        updateQuantity(id, (quantities[id] || 0) > 1 ? (quantities[id] || 0) - 1 : 1);
    };

    let total = cart.length > 0 ? "$" + " " + cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '').replace(/,/g, '').trim()) * (quantities[item.id] || 0), 0) : "$ 0";

    function commafy(num) {
        let str = num.toString().split('.');
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        if (str[1]) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }

        return str.join('.');
    }

    return (
        <section className='absolute font-Manrope z-50 top-[115px] right-[24px] flex flex-col bg-[#FFF] rounded-[8px] w-[327px] h-[488px] py-[32px] px-[28px] gap-[32px]'>
            <div className='flex w-full justify-between items-center'>
                <h1 className='font-bold tracking-[1.3px] text-[18px] text-[#000]'>CART ({cart.length})</h1>
                <p onClick={clearCart} className='font-medium text-[15px] text-[#000] opacity-50 underline cursor-pointer hover:opacity-70'>Remove all</p>
            </div>

            <div>
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index} className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <img src={require(`../assets${item.img}`)} alt={item.name} className='w-12 h-12 rounded-[8px]' />
                                <div className='flex flex-col ml-4'>
                                    <span className='font-medium text-[15px] text-[#000]'>{item.name}</span>
                                    <span className='font-medium text-[15px] text-[#000] opacity-50'>{item.price}</span>
                                </div>
                            </div>
                            <div className="flex h-12 w-[120px] gap-5 items-center justify-center bg-[#f1f1f1]">
                                <button className='flex items-center justify-center w-4 h-[18px]' onClick={() => decrementQuantity(item.id)}>-</button>
                                <span className='font-bold text-[13px] tracking-[1px] text-[#000]'>{quantities[item.id] || 0}</span>
                                <button className='flex items-center justify-center w-4 h-[18px]' onClick={() => incrementQuantity(item.id)}>+</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-[15px] text-[#000] opacity-50'>Your cart is empty.</p>
                )}
            </div>

            <div className='flex w-full justify-between items-center'>
                <h1 className='font-bold text-[15px] text-[#000]'>TOTAL</h1>
                <p className='font-bold text-[15px] text-[#000]'>
                    {commafy(total)}
                </p>
            </div>

            <button className='w-full h-12 bg-[#D87D4A] text-white font-bold text-[15px] tracking-[1px]'>CHECKOUT</button>
        </section>
    );
}
