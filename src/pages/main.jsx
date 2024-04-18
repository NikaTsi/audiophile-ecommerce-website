import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Categories from '../components/categories'
import Advertisement from '../components/advertisement'
import Button from '../components/button'
import Footer from '../components/footer'
import zx9 from '../assets/main/ZX9.svg'
import yx1 from '../assets/main/YX1.svg'



function Main() {
  return (
    <main className='flex flex-col w-full min-h-screen font-Manrope bg-[#fafafa]'>
      <Header />

      <div className='flex flex-col w-full px-[24px] pt-[108px] pb-[112px] items-center text-center bg-[#000] text-[#FFF] bg-MainBackground-mobile bg-no-repeat bg-bottom bg-cover'>
        <h3 className='text-[14px] tracking-[10px] font-normal opacity-50'>NEW PRODUCT</h3>
        <h1 className='text-[36px] tracking-[1px] font-bold leading-[40px] mt-4'>XX99 Mark II HEADPHONES</h1>
        <p className='text-[15px] font-medium leading-[25px] mt-6 mb-[28px] opacity-75'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Button text={`[#FFF]`} background={`[#d87d4a]`} hoverBackground={`[#fbaf85]`} />
      </div>

        <Categories value={"main"} />

      <div className='flex flex-col w-full px-6 gap-6'>

        <div className='flex flex-col w-full items-center bg-[#d87d4a] rounded-[8px] py-[55px] px-6 gap-8 bg-circles-mobile bg-top bg-no-repeat bg-contain'>
          <img className='w-[172px] h-[207px]' src={zx9} alt="zx9" />
          <div className='flex flex-col text-center items-center gap-6'>
            <h1 className='text-[36px] font-bold leading-10 tracking-[1.3px] text-[#FFF]'>ZX9 <br /> SPEAKER</h1>
            <p className='text-[15px] font-medium leading-[25px] text-[#FFF] opacity-75'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Button background={`[#000]`} text={`[#FFF]`} hoverBackground={`[#4C4C4C]`} />
          </div>
        </div>

        <div className='flex flex-col gap-8 w-full rounded-[8px] py-[101px] px-6 bg-ZX7 bg-top bg-no-repeat bg-cover'>
          <h1 className='text-[28px] font-bold tracking-[2px] text-[#000]'>ZX7 SPEAKER</h1>
          <Button background={`transparent`} text={`[#000]`} border={`border-[#000]`} hoverBackground={`[#000]`} hoverText={`[#FFF]`} />
        </div>

        <div className='flex flex-col gap-6 w-full'>
          <img className='rounded-[8px]' src={yx1} alt="yx1" />
          <div className='flex flex-col w-full gap-8 rounded-[8px] bg-[#f1f1f1] py-[41px] px-6'>
            <h1 className='text-[28px] font-bold tracking-[2px] text-[#000]'>ZX7 SPEAKER</h1>
            <Button background={`transparent`} text={`[#000]`} border={`border-[#000]`} hoverBackground={`[#000]`} hoverText={`[#FFF]`} />
          </div>
        </div>

      </div>

      <Advertisement />

      <Footer />

    </main>
  )
}

export default Main