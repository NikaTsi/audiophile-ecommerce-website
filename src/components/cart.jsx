import React from 'react'

export default function CartBox() {
  return (
    <section className='absolute font-Manrope z-50 top-[115px] right-[24px] flex flex-col bg-[#FFF] rounded-[8px] w-[327px] h-[488px] py-[32px] px-[28px] gap-[32px]'>
      <div className='flex w-full justify-between items-center'>
        <h1 className='font-bold tracking-[1.3px] text-[18px] text-[#000]'>CART ({ })</h1>
        <p className='font-medium text-[15px] text-[#000] opacity-50 underline cursor-pointer hover:opacity-70'>Remove all</p>
      </div>

      <div></div>

      <div className='flex w-full justify-between items-center'>
        <h1>TOTAL</h1>
        <p>{ }</p>
      </div>

      <button className='w-full h-12 bg-[#D87D4A]'>CHECKOUT</button>

    </section>
  )
}
