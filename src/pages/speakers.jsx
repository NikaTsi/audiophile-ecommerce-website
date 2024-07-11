import React from 'react'
import Categories from '../components/categories'
import Advertisement from '../components/advertisement'
import Card from '../components/card'


function Speakers() {
    
    return (
        <main className='flex flex-col w-full items-center font-Manrope bg-[#fafafa]'>

            <div className='flex w-full py-8 justify-center bg-[#000]'>
                <h1 className='text-[#FFF] text-[28px] tracking-[2px] font-bold'>SPEAKERS</h1>
            </div>

            <Card category={"speakers"} />


            <Categories />
            <Advertisement />
        </main>
    )
}

export default Speakers