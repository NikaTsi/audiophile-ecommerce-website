import React from 'react'
import logo from '../assets/navigation/logo.svg'
import Navigation from './navigation'

export default function Footer() {
    return (
        <footer className='felx flex-col w-full gap-[48px] bg-[#101010] text-[#FFF] items-center text-center pt-[52px] pb-[38px] px-6'>

            <div className='flex flex-col gap-12 items-center'>
                <img className='w-[143px] h-[25px] cursor-pointer' src={logo} alt="logo" />
                {<Navigation />}
            </div>

            <div className='flex'>
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            </div>

            <div className='flex flex-col gap-12'>
                <p></p>
                svgs
            </div>

        </footer>
    )
}
