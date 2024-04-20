import React from 'react'
import data from '../data.json'
import arrow from '../assets/section/arrow.svg'

export default function Categories( {value}) {
  const imageWidths = ["w-[80px]", "w-[84px]", "w-[103px]"]

  let cards = data.section.map((item, index) => (
    <div className='flex flex-col w-[327px] text-center items-center bg-[#f1f1f1] rounded-[8px] relative pt-[88px] pb-[22px]' key={index}>
      <img className={`absolute top-[calc(-52px)] drop-shadow-3xl ${imageWidths[index]}`} src={require(`../assets${item.imageSrcMobile}`)} alt="icon" />
      <h1 className='font-bold text-[15px] text-[#000000] tracking-[1px]'>{item.title}</h1>
      <div className='flex items-center gap-[13px] mt-[17px]'>
        <p className='font-bold text-[13px] text-[#000000] opacity-50 tracking-[1px]'>SHOP</p>
        <img src={arrow} alt="arrowIcon" />
      </div>
    </div>
  ))


  return (
    <section className={`flex flex-col  w-full items-center gap-[68px] pt-[92px] ${value && "pb-[120px]"}`}>
      {cards}
    </section>
  )
}
