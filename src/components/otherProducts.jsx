import React from 'react'
import { Link } from 'react-router-dom'
import Button from './button'

export default function OtherProducts({ product }) {
    
    return (
        <section className='flex flex-col w-full pt-16 pb-[80px] px-6 gap-[120px]'>
            {product.otherCards.heading.map((item, index) => (
                <div className='flex flex-col w-full items-center gap-8' key={index}>
                    <div className='flex w-full h-[352px] justify-center pt-[41px] bg-[#f1f1f1] rounded-[8px]'>
                        {/* <img className="h-[243px] drop-shadow-3xl" src={require(`../assets${product.otherCards.icons[index]}`)} /> */}
                    </div>
                    <div className='flex flex-col w-full gap-6 items-center text-center'>
                        <h1 className='text-[28px] font-bold text-[#000] tracking-[1px] leading-[38px]'>{item}</h1>
                        <Link to={`/${product.otherCards.category[index]}/${product.otherCards.newId[index]}`}>
                            <Button text={`[#FFF]`} background={`[#d87d4a]`} hoverBackground={`[#fbaf85]`} />
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    )
}
