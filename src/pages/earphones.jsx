import React from 'react'
import Header from '../components/header'
import Categories from '../components/categories'
import Advertisement from '../components/advertisement'
import Footer from '../components/footer'
import Card from '../components/card'


function Speakers() {
    
    return (
        <main className='flex flex-col w-full items-center font-Manrope bg-[#fafafa]'>

            <div className='flex w-full py-8 justify-center bg-[#000]'>
                <h1 className='text-[#FFF] text-[28px] tracking-[2px] font-bold'>EARPHONES</h1>
            </div>

            <Card category={"earphones"} />


            <Categories />
            <Advertisement />
        </main>
    )
}

export default Speakers