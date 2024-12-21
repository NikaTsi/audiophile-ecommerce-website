import React from 'react'
import logo from '../assets/navigation/logo.svg'
import Navigation from './navigation'
import { Link } from 'react-router-dom'
import data from '../data.json'

export default function Footer() {
    return (
        <footer className='flex w-full relative bg-[#101010] text-[#FFF] justify-center text-center  md:justify-start md:text-start font-Manrope xl:justify-center'>


            <section className='flex relative flex-col w-full gap-12 px-6 pt-[52px] pb-[38px] md:pt-[60px] md:pb-[46px] md:px-10 md:gap-0 xl:w-[1280px]'>

                <div className='flex absolute top-0 left-[50%] translate-x-[calc(-50%)] w-[101px] h-[4px] bg-[#d87d4a] md:left-[40px] md:translate-x-0'></div>

                <div className='flex w-full flex-col gap-12 items-center md:items-start md:gap-8 lg:flex-row lg:justify-between'>
                    <Link to={"/"}>
                        <img className='w-[143px] h-[25px] cursor-pointer' src={logo} alt="logo" />
                    </Link>
                    {<Navigation flexDirection={"flex-col md:flex-row"} gap={"gap-4 md:gap-[40px]"} />}
                </div>

                <p className='text-[15px] leading-[25px] font-medium opacity-50 md:mt-8 md:mb-20 lg:w-[540px] lg:mt-[36px] lg:mb-[56px]'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

                <div className='flex flex-col w-full items-center gap-12 md:flex-row md:justify-between'>
                    <div className='flex flex-col gap-12'>
                        <p className='text-[15px] leading-[25px] font-bold opacity-50'>Copyright 2021. All Rights Reserved</p>
                    </div>

                    <div className='flex gap-4 items-center'>
                        {data.footer.svg.map((item, i) => (
                            <Link to={`${item.href}`} target={`item` + `${i}`} key={i}>
                                <svg className='fill-[#FFF] cursor-pointer hover:fill-[#D87D4A] flex' xmlns="http://www.w3.org/2000/svg" width="24" height="24" >
                                    <path fillRule="evenodd" clipRule="evenodd" d={`${item.d}`} />
                                </svg>
                            </Link>
                        ))}
                    </div>
                </div>

            </section>

        </footer>
    )
}
