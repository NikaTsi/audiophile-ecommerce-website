import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data.json'
import Button from './button'

export default function Card({ category }) {
    return (
        <section className='flex flex-col w-full pt-16 pb-[80px] px-6 gap-[120px] md:pt-[120px] md:pb-[24px] md:px-10 xl:pt-[160px] xl:pb-[92px] xl:gap-[160px] xl:w-[1280px]'>
            {data.cards[category].map((item, index) => (
                <div className={`flex flex-col w-full items-center gap-8 md:gap-[52px] lg:flex-row xl:gap-[125px] ${index % 2 != 0 && "lg:flex-row-reverse"}`} key={index}>
                    <div className='flex w-full h-[352px] justify-center pt-[41px] bg-[#f1f1f1] rounded-[8px] xl:h-[560px] xl:pt-[65px]'>
                        <img className="h-[243px] drop-shadow-3xl xl:h-[78%]" src={require(`../assets${item.img}`)} />
                    </div>
                    <div className='flex flex-col w-full gap-6 items-center text-center md:gap-4 lg:items-start lg:text-start xl:gap-4'>
                        {item.description && <span className='text-[14px] font-normal text-[#d87d4a] tracking-[10px]'>{item.description}</span>}
                        <h1 className='text-[28px] font-bold text-[#000] tracking-[1px] leading-[38px] md:text-10 md:leading-[44px]'>{item.title}</h1>
                        <p className='text-[15px] font-medium text-[#000] opacity-50 leading-[25px] md:mt-4 md:mb-2 md:px-[60px] lg:px-0 xl:mb-6'>{item.paragraph}</p>
                        <Link to={`/${category}/${item.id}`}>
                            <Button text={`text-[#FFF]`} background={`bg-[#d87d4a]`} hoverBackground={`hover:bg-[#fbaf85]`} />
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    )
}
