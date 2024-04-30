import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import burgerMenu from '../assets/navigation/burger-menu.svg'
import logo from '../assets/navigation/logo.svg'
import cart from '../assets/navigation/cart.svg'
import Categories from './categories'

export default function Header() {
    const [menu, setMenu] = useState(false)

    function handleMenu() {
        setMenu(!menu)
    }

    return (
        <header className='flex flex-col w-full font-Manrope bg-[#000000] sticky top-0 z-20'>

            <div className='flex w-full justify-between items-center py-8 px-6 md:py-8 md:px-10'>
                <div className='flex w-full items-center gap-[76px] md:gap-[42px]'>
                    <img className='w-4 h-[15px] cursor-pointer' onClick={handleMenu} src={burgerMenu} alt="burgerMenu" />
                    <Link to={"/"}>
                        <img className='w-[143px] h-[25px] cursor-pointer' src={logo} alt="logo" />
                    </Link>
                </div>

                <div></div>

                <div className='flex'>
                    <img className='w-[23px] h-5 cursor-pointer' src={cart} alt="cart" />
                </div>
            </div>

            <div className='flex w-full border-t border-[#fafafa] opacity-10 md:px-10'></div>

            {/* <div className={`absolute flex w-full bg-[#FFF] pb-[35px] duration-500 z-50 overflow-y-scroll ${menu ? "top-[90px]" : "top-[-1000%]"}`}>
                <Categories ptValue={true}/>
            </div> */}

            {/* <div className={`absolute flex max-h-[750px] flex-col w-full bg-[#FFF] pb-[35px] duration-500 z-50 overflow-y-scroll ${menu ? " top-[90px]" : "top-[-1000%]"}`}>
                <Categories ptValue={true}/>
            </div> */}

            <div className='flex flex-col w-full'>
                {/* <div className={`absolute flex flex-col w-full h bg-[#FFF] pb-[35px] duration-500 z-50 overflow-y-scroll rounded-b-[8px] ${menu ? "top-[90px] max-h-[calc(100vh-90px)]" : "overflow-hidden top-[-1000%]"}`}>
                    <Categories ptValue={true} />
                </div> */}

                <div className={`flex w-full min-h-[100vh] bg-[#000] opacity-40 ${menu ? "flex" : "hidden"}`}>
                </div>
            </div>

        </header>
    )
}
