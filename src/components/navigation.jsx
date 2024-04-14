import React from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'

export default function Navigation() {
    let navigation = data.navigation.map((item, index) => (
        <Link key={index} to={item.url}>{item.title}</Link>
    ))
    
  return (
    <div className='flex flex-col gap-4 cursor-pointer'>
        {navigation}
    </div>
  )
}
