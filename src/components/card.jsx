import React from 'react'
import data from '../data.json'
import Button from './button'

export default function Card({ category }) {
    let card = data.cards[category].map((item, index) => (
        <div className='flex flex-col w-full items-center text-center gap-8' key={index}>
            <div className='flex w-full h-[352px] justify-center pt-[41px] bg-[#f1f1f1] rounded-[8px]'>
                <img className="h-[202px] w-[202px] drop-shadow-3xl" src={require(`../assets${item.img}`)} />
            </div>
            <div className='flex flex-col w-full gap-6 items-center'>
                {item.description && <span className='text-[14px] font-normal text-[#d87d4a] tracking-[10px]'>{item.description}</span>}
                <h1 className='text-[28px] font-bold text-[#000] tracking-[1px] leading-[38px]'>{item.title}</h1>
                <p className='text-[15px] font-medium text-[#000] opacity-50 leading-[25px]'>{item.paragraph}</p>
                <Button text={`[#FFF]`} background={`[#d87d4a]`} hoverBackground={`[#fbaf85]`} />
            </div>
        </div>
    ))

    return (
        <section className='flex flex-col w-full pt-16 pb-[80px] px-6 gap-[120px]'>
            {card}
        </section>
    )
}
