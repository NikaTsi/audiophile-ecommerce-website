import React from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'

export default function Navigation({ flexDirection, gap }) {
  return (
    <div className={`flex ${flexDirection} ${gap} cursor-pointer`}>
      {data.navigation.map((item, index) => (
        <Link key={index} to={item.url} className='text-[13px] text-[#FFF] leading-[25px] tracking-[2px] hover:text-[#d87d4a]'>{item.title}</Link>
      ))}
    </div>
  )
}
