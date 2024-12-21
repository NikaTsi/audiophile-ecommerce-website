import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import burgerMenu from '../assets/navigation/burger-menu.svg';
import logo from '../assets/navigation/logo.svg';
import cartIcon from '../assets/navigation/cart.svg';
import Categories from './categories';
import CartBox from './cart';
import Navigation from './navigation';
import { useCartContext } from '../CartContext';

export default function Header({bg}) {
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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setMenu(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className={`flex h-[91px] flex-col w-full font-Manrope ${bg} sticky top-0 z-20 transition-transform duration-300 ${showHeader || menu || cartVisible ? 'transform translate-y-0' : 'transform -translate-y-full'} xl:items-center`}>

            <section className='xl:w-[1280px] relative'>
                <div className='flex w-full justify-between items-center py-8 px-6 md:py-8 md:px-10'>
                    <div className='flex items-center gap-[76px] md:gap-[42px]'>
                        <img className='w-4 h-[15px] cursor-pointer xl:hidden' onClick={handleMenu} src={burgerMenu} alt="burgerMenu" />
                        <Link to={"/"}>
                            <img className='w-[143px] h-[25px] cursor-pointer' src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div className='hidden xl:flex'>
                        <Navigation gap={"gap-[34px]"} />
                    </div>

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

                <div className='md:px-10'>
                    <div className='flex w-full border-t border-[#fafafa] opacity-10'></div>
                </div>

                <div className={`absolute flex flex-col w-full h bg-[#FFF] pb-[35px] duration-300 z-50 overflow-y-scroll rounded-b-[20px] md:pb-[67px] xl:hidden ${menu ? "top-[90px] max-h-[calc(100vh-90px)]" : "overflow-hidden top-[-1000%]"}`}>
                    <Categories ptValue={true} />
                </div>
            </section>

            <div className={`flex w-full min-h-[100vh] bg-[#000] opacity-60 ${menu || cartVisible ? "flex" : "hidden"}`}></div>

        </header>
    );
}
