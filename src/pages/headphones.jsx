import React from 'react'
import Header from '../components/header'
import Categories from '../components/categories'
import Advertisement from '../components/advertisement'
import Footer from '../components/footer'
import Card from '../components/card'


function Headphones() {
    
    return (
        <main className='flex flex-col w-full items-center font-Manrope bg-[#fafafa]'>

            <div className='flex w-full py-8 justify-center bg-[#000] md:pt-[105px] md:pb-[97px]'>
                <h1 className='text-[#FFF] text-[28px] tracking-[2px] font-bold md:text-[40px] md:leading-[44px]'>HEADPHONES</h1>
            </div>

            <Card category={"headphones"} />


            <Categories />
            <Advertisement />
        </main>
    )
}

export default Headphones