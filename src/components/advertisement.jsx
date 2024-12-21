import React from 'react'
import advertisement from '../assets/advertisement/advertisement.svg'


export default function Advertisement() {
    return (
        <article className='flex flex-col w-full items-center text-center py-[120px] px-6 md:py-[120px] md:px-10 md:flex-row-reverse md:gap-[10%] xl:py-[160px]'>
            <div className='flex w-full justify-center'>
                <img className='flex w-full h-[300px] rounded-[8px] justify-center md:w-full md:h-[430px] xl:h-[588px]' src={advertisement} alt="ad" />
            </div>
            <div className='flex flex-col md:w-[100%]'>
                <h1 className='text-[28px] text-[#000] font-bold mt-[40px] mb-[32px] tracking-[1px] md:mt-0 md:text-[40px] md:leading-[44px] md:tracking-[1.4px] md:text-start '>BRINGING YOU THE <span className='text-[#d87d4a]'>BEST</span> AUDIO GEAR</h1>
                <p className='text-[15px] text-[#000] font-medium leading-[25px] opacity-50  md:text-start '>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available
                    for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
                    people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        </article>
    )
}
