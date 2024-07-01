import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import burgerMenu from '../assets/navigation/burger-menu.svg';
import logo from '../assets/navigation/logo.svg';
import cartIcon from '../assets/navigation/cart.svg';
import Categories from './categories';
import CartBox from './cart';

export default function Header() {
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    function handleMenu() {
        setMenu(!menu);
        setCart(false);
    }
    
    function handleCart() {
        setCart(!cart);
        setMenu(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (!menu) {
                if (window.scrollY > lastScrollY) {
                    setShowHeader(false);
                } else {
                    setShowHeader(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, menu]);


    return (
        <header className={`flex h-[91px] flex-col w-full font-Manrope bg-[#000000] sticky top-0 z-20 transition-transform duration-300 ${showHeader || menu || cart ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div className='flex w-full justify-between items-center py-8 px-6 md:py-8 md:px-10'>
                <div className='flex w-full items-center gap-[76px] md:gap-[42px]'>
                    <img className='w-4 h-[15px] cursor-pointer' onClick={handleMenu} src={burgerMenu} alt="burgerMenu" />
                    <Link to={"/"}>
                        <img className='w-[143px] h-[25px] cursor-pointer' src={logo} alt="logo" />
                    </Link>
                </div>

                <div></div>

                <div className='flex'>
                    <img onClick={handleCart} className='w-[23px] h-5 cursor-pointer' src={cartIcon} alt="cart" />
                </div>
            </div>

            {cart && <CartBox />}

            <div className='flex w-full border-t border-[#fafafa] opacity-10 md:px-10'></div>

            <div className={`absolute flex flex-col w-full h bg-[#FFF] pb-[35px] duration-300 z-50 overflow-y-scroll rounded-b-[20px] ${menu ? "top-[90px] max-h-[calc(100vh-90px)]" : "overflow-hidden top-[-1000%]"}`}>
                <Categories ptValue={true} />
            </div>

            <div className={`flex w-full min-h-[100vh] bg-[#000] opacity-60 ${menu || cart ? "flex" : "hidden"}`}></div>
        </header>
    );
}
