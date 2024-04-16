import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ background, text, link, border, hoverBackground }) {
    return (
        <Link to={`${link}`}>
            <button className={`text-[13px] text-[${text}] ${border ? "border" `border-[${border}]` : ""}  tracking-[1px] font-bold w-[160px] h-12 bg-[${background}] hover:bg-[${hoverBackground}]`}>SEE PRODUCT</button>
        </Link>
    )
}
