import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';

export default function CartBox() {
    const { cart, clearCart, updateQuantity } = useCartContext();
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
        const updatedQuantities = {};
        cart.forEach(item => {
            updatedQuantities[item.id] = item.quantity;
        });
        setQuantities(updatedQuantities);
    }, [cart]);

    useEffect(() => {
        const updatedCart = cart.filter(item => quantities[item.id] > 0).map(item => ({
            ...item,
            quantity: quantities[item.id]
        }));
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }, [quantities, cart]);

    const handleQuantityChange = (id, newQuantity) => {
        const updatedQuantities = {
            ...quantities,
            [id]: newQuantity
        };
        setQuantities(updatedQuantities);
        updateQuantity(id, newQuantity);
    };

    const incrementQuantity = (id) => {
        const newQuantity = (quantities[id] || 0) + 1;
        handleQuantityChange(id, newQuantity);
    };

    const decrementQuantity = (id) => {
        const newQuantity = (quantities[id] || 0) - 1;
        handleQuantityChange(id, newQuantity > 0 ? newQuantity : 0);
    };

    const total = cart.length > 0 ? "$ " + cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '').replace(/,/g, '').trim()) * (quantities[item.id] || 0), 0).toFixed(2) : "$ 0";

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

            <div className='flex flex-col w-full gap-[24px]'>
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index} className='flex justify-between items-center'>
                            <div className='flex items-center gap-4'>
                                <div className='flex justify-center items-center bg-[#f1f1f1] rounded-[8px] w-[64px] h-[64px] '>
                                    <img src={require(`../assets${item.img}`)} alt={item.name} className='w-12 h-12 rounded-[8px]' />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-[15px] leading-[25px] text-[#000]'>{item.name}</span>
                                    <span className='font-bold text-[14px] leading-[25px] text-[#000] opacity-50'>{item.price}</span>
                                </div>
                            </div>
                            <div className="flex h-[36px] w-[100px] gap-[12px] items-center justify-center bg-[#f1f1f1]">
                                <button className='flex items-center justify-center w-4 h-[18px]' onClick={() => decrementQuantity(item.id)}>-</button>
                                <span className='font-bold text-[13px] tracking-[1px] text-[#000]'>{quantities[item.id]}</span>
                                <button className='flex items-center justify-center w-4 h-[18px]' onClick={() => incrementQuantity(item.id)}>+</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-[15px] text-[#000] opacity-50'>Your cart is empty.</p>
                )}
            </div>

            <div className='flex w-full justify-between items-center'>
                <h1 className='font-medium text-[15px] opacity-50 text-[#000]'>TOTAL</h1>
                <p className='font-bold text-[18px] text-[#000]'>
                    {commafy(total)}
                </p>
            </div>

            <Link to={"/checkout"}>
                <button className='w-full h-12 bg-[#D87D4A] text-white font-bold text-[15px] tracking-[1px]'>CHECKOUT</button>
            </Link>
        </section>
    );
}
