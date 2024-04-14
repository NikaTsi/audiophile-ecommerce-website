import React from 'react'
import burgerMenu from '../assets/navigation/burger-menu.svg'
import logo from '../assets/navigation/logo.svg'
import cart from '../assets/navigation/cart.svg'

export default function Header() {
    return (
        <header className='flex flex-col w-full font-Manrope bg-[#000000]'>
            <div className='flex w-full h-[15px] opacity-50 bg-[#191919] md:hidden'></div>

            <div className='flex w-full justify-between items-center pt-[17px] pb-[32px] px-6 md:py-8 md:px-10'>
                <div className='flex w-full items-center gap-[76px] md:gap-[42px]'>
                    <img className='w-4 h-[15px] cursor-pointer' src={burgerMenu} alt="burgerMenu" />
                    <img className='w-[143px] h-[25px] cursor-pointer' src={logo} alt="logo" />
                </div>

                <div></div>

                <div className='flex'>
                    <img className='w-[23px] h-5 cursor-pointer' src={cart} alt="cart" />
                </div>
            </div>

            <div className='flex w-full border-t border-[#fafafa] opacity-10 md:px-10'></div>
        </header>
    )
}