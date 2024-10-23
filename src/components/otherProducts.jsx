import React from 'react'
import { Link } from 'react-router-dom'
import Button from './button'

export default function OtherProducts({ product }) {
    
    return (
        <section className='flex flex-col w-full pt-10 pb-[80px] gap-[56px] items-center md:flex-row md:items-start md:justify-center md:gap-[2%] md:pt-[56px] md:pb-6'>
            {product.otherCards.heading.map((item, index) => (
                <div className='flex flex-col w-full items-center gap-8 max-w-[327px] md:gap-10' key={index}>
                    <div className='flex w-full h-[120px] justify-center items-center bg-[#f1f1f1] rounded-[8px] md:h-[318px]'>
                        <img className='md:w-[150px]' src={require(`../assets${product.otherCards.icons[index]}`)} />
                    </div>
                    <div className='flex flex-col w-full gap-8 items-center text-center'>
                        <h1 className='text-[28px] font-bold text-[#000] tracking-[1px] leading-[38px] md:text-[24px]'>{item}</h1>
                        <Link to={`/${product.otherCards.category[index]}/${product.otherCards.newId[index]}`}>
                            <Button text={`text-[#FFF]`} background={`bg-[#d87d4a]`} hoverBackground={`hover:bg-[#fbaf85]`} />
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    )
}
