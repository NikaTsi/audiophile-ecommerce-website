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

      <div className='flex flex-col w-full px-[24px] pt-[108px] pb-[112px] items-center text-center bg-[#000] text-[#FFF] bg-MainBackground-mobile bg-no-repeat bg-bottom bg-cover'>
        <h3 className='text-[14px] tracking-[10px] font-normal opacity-50'>NEW PRODUCT</h3>
        <h1 className='text-[36px] tracking-[1px] font-bold leading-[40px] mt-4'>XX99 Mark II HEADPHONES</h1>
        <p className='text-[15px] font-medium leading-[25px] mt-6 mb-[28px] opacity-75'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Link to={"/headphones/XX99-mark-II-headphone"}>
          <Button text={`text-[#FFF]`} background={`bg-[#d87d4a]`} hoverBackground={`hover:bg-[#fbaf85]`} />
        </Link>
      </div>

      <Categories value={"main"} />

      <div className='flex flex-col w-full px-6 gap-6 md:px-10'>

        <div className='flex flex-col w-full items-center bg-[#d87d4a] rounded-[8px] py-[55px] px-6 gap-8 bg-circles-mobile bg-top bg-no-repeat bg-contain md:bg-cover md:bg-top_[-120px]'>
          <img className='w-[172px] h-[207px]' src={zx9} alt="zx9" />
          <div className='flex flex-col text-center items-center gap-6'>
            <h1 className='text-[36px] font-bold leading-10 tracking-[1.3px] text-[#FFF] md:text-[56px] md:leading-[58px]'>ZX9 <br /> SPEAKER</h1>
            <p className='text-[15px] font-medium leading-[25px] text-[#FFF] opacity-75 md:mb-4 md:px-[165px]'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Link to={"/speakers/ZX9-speaker"}>
              <Button background={`bg-[#000]`} text={`text-[#FFF]`} hoverBackground={`hover:bg-[#4C4C4C]`} />
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-8 w-full rounded-[8px] py-[101px] px-6 bg-ZX7 bg-top bg-no-repeat bg-cover md:px-[62px]'>
          <h1 className='text-[28px] font-bold tracking-[2px] text-[#000]'>ZX7 SPEAKER</h1>
          <Link to={"/speakers/ZX7-speaker"}>
            <Button background={`bg-transparent`} text={`text-[#000]`} border={`border-[#000]`} hoverBackground={`hover:bg-[#000]`} hoverText={`hover:text-[#FFF]`} />
          </Link>
        </div>

        <div className='flex flex-col gap-6 w-full md:flex-row md:gap-[2%]'>
          <img className='h-[200px] w-full rounded-[8px] object-cover md:h-[320px]' src={yx1} alt="yx1" />
          <div className='flex flex-col w-full gap-8 rounded-[8px] bg-[#f1f1f1] py-[41px] px-6 md:px-10 md:pt-[101px]'>
            <h1 className='text-[28px] font-bold tracking-[2px] text-[#000]'>YX1 EARPHONES</h1>
            <Link to={"/earphones/YX1-earphones"}>
              <Button background={`bg-transparent`} text={`text-[#000]`} border={`border-[#000]`} hoverBackground={`hover:bg-[#000]`} hoverText={`hover:text-[#FFF]`} />
            </Link>
          </div>
        </div>

      </div>

      <Advertisement />


    </main>
  )
}

export default Main