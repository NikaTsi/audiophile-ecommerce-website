import React from 'react'
import Categories from '../components/categories'
import Advertisement from '../components/advertisement'
import Card from '../components/card'


function Speakers() {

    return (
        <main className='flex flex-col w-full items-center font-Manrope bg-[#fafafa]'>

            <div className='flex w-full py-8 justify-center bg-[#000] md:pt-[105px] md:pb-[97px]'>
                <h1 className='text-[#FFF] text-[28px] tracking-[2px] font-bold md:text-[40px] md:leading-[44px]'>EARPHONES</h1>
            </div>

            <Card category={"earphones"} />

            <section className='xl:w-[1280px]'>
                <Categories />
                <Advertisement />
            </section>

        </main>
    )
}

export default Speakers