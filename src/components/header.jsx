import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import burgerMenu from '../assets/navigation/burger-menu.svg';
import logo from '../assets/navigation/logo.svg';
import cartIcon from '../assets/navigation/cart.svg';
import Categories from './categories';
import CartBox from './cart';
import { useCartContext } from '../CartContext';

export default function Header() {
    const [menu, setMenu] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    const { cart } = useCartContext();

    function handleMenu() {
        setMenu(!menu);
        setCartVisible(false);
    }

    function handleCart() {
        setCartVisible(!cartVisible);
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

    useEffect(() => {
        setMenu(false);
        setCartVisible(false);
    }, [location]);

    return (
        <header className={`flex h-[91px] flex-col w-full font-Manrope bg-[#000000] sticky top-0 z-20 transition-transform duration-300 ${showHeader || menu || cartVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div className='flex w-full justify-between items-center py-8 px-6 md:py-8 md:px-10'>
                <div className='flex w-full items-center gap-[76px] md:gap-[42px]'>
                    <img className='w-4 h-[15px] cursor-pointer' onClick={handleMenu} src={burgerMenu} alt="burgerMenu" />
                    <Link to={"/"}>
                        <img className='w-[143px] h-[25px] cursor-pointer' src={logo} alt="logo" />
                    </Link>
                </div>

                <div></div>

                <div className='flex flex-col items-center justify-center relative'>
                    {cart.length > 0 && (
                        <div onClick={handleCart} className='absolute flex justify-center items-center w-[16px] h-[16px] bg-[#d87d4a] rounded-[50%] top-[-6px] left-[12px] cursor-pointer animate-bounce'>
                            <h1 className='text-[#FFFFFF] text-[12px]'>{cart.length}</h1>
                        </div>
                    )}
                    <img onClick={handleCart} className='w-[24px] h-5 cursor-pointer' src={cartIcon} alt="cart" />
                </div>
            </div>

            {cartVisible && <CartBox />}

            <div className='flex w-full border-t border-[#fafafa] opacity-10 md:px-10'></div>

            <div className={`absolute flex flex-col w-full h bg-[#FFF] pb-[35px] duration-300 z-50 overflow-y-scroll rounded-b-[20px] md:pb-[67px] ${menu ? "top-[90px] max-h-[calc(100vh-90px)]" : "overflow-hidden top-[-1000%]"}`}>
                <Categories ptValue={true} />
            </div>

            <div className={`flex w-full min-h-[100vh] bg-[#000] opacity-60 ${menu || cartVisible ? "flex" : "hidden"}`}></div>
        </header>
    );
}
