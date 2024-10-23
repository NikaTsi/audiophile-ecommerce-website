import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data.json'
import arrow from '../assets/section/arrow.svg'

export default function Categories({ value, ptValue }) {
  const imageWidths = ["w-[80px]", "w-[84px]", "w-[103px]"]

  return (
    <section className={`flex flex-col w-full items-center justify-center gap-[68px] md:flex-row md:gap-[2%] md:px-10 ${value && "pb-[120px] md:pb-[96px]"} ${ptValue ? "pt-[84px] md:pt-[108px]" : "pt-[92px] md:pt-[148px]"}`}>
      {data.section.map((item, index) => (
        <Link to={item.url} key={index}>
          <div className='flex flex-col w-[327px] text-center items-center bg-[#f1f1f1] rounded-[8px] relative pt-[88px] pb-[22px] cursor-pointer group md:w-[223px] md:max-w-[350px]' key={index}>
            <img className={`absolute top-[calc(-52px)] drop-shadow-3xl ${imageWidths[index]}`} src={require(`../assets${item.imageSrcMobile}`)} alt="icon" />
            <h1 className='font-bold text-[15px] text-[#000000] tracking-[1px]'>{item.title}</h1>
            <div className='flex items-center gap-[13px] mt-[17px]'>
              <p className='font-bold text-[13px] text-[#000000] opacity-50 tracking-[1px] group-hover:text-[#D87D4A] group-hover:opacity-100'>SHOP</p>
              <img src={arrow} alt="arrowIcon" />
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}