import React from 'react'
import advertisement from '../assets/advertisement/advertisement.svg'


export default function Advertisement() {
    return (
        <article className='flex flex-col w-full items-center text-center py-[120px] px-6 md:py-[96px] md:px-10'>
            <div className='flex w-full justify-center'>

                <img className='flex w-full h-[300px] rounded-[8px] justify-center' src={advertisement} alt="ad" />
            </div>
            <div>
                <h1 className='text-[28px] text-[#000] font-bold mt-[40px] mb-[32px] tracking-[1px] md:mt-[63px] md:text-[40px] md:leading-[44px] md:tracking-[1.4px]'>BRINGING YOU THE <span className='text-[#d87d4a]'>BEST</span> AUDIO GEAR</h1>
                <p className='text-[15px] text-[#000] font-medium leading-[25px] opacity-50 md:px-[55px]'>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available
                    for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
                    people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        </article>
    )
}
