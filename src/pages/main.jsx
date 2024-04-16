import React from 'react'
import Header from '../components/header'
import Section from '../components/section'
import Advertisement from '../components/advertisement'
import Button from '../components/button'
import Footer from '../components/footer'


function Main() {
  return (
    <main className='flex flex-col w-full min-h-screen font-Manrope'>
      <Header />

      <div className='flex flex-col w-full px-[24px] pt-[108px] pb-[112px] items-center text-center bg-[#000] text-[#FFF] bg-MainBackground-mobile bg-no-repeat bg-bottom bg-cover'>
        <h3 className='text-[14px] tracking-[10px] font-normal opacity-50'>NEW PRODUCT</h3>
        <h1 className='text-[36px] tracking-[1px] font-bold leading-[40px] mt-4'>XX99 Mark II HEADPHONES</h1>
        <p className='text-[15px] font-medium leading-[25px] mt-6 mb-[28px] opacity-75'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Button text={`#FFF`} background={`#d87d4a`} hoverBackground={`#fbaf85`} />
      </div>

      <div>

        <div>
          <Section />
        </div>

        <div>
          <img src="" alt="" />
          <div></div>
        </div>
          
        <div>
          <Advertisement />
        </div>

      </div>

      <Footer />

    </main>
  )
}

export default Main