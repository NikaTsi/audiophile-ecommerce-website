import React from 'react'

export default function Button({ background, text, border, hoverBackground, hoverText }) {
    return (
        <button className={`text-[13px] text-${text} ${border ? "border " + border : ""} tracking-[1px] font-bold w-[160px] h-12 bg-${background} hover:bg-${hoverBackground} hover:text-${hoverText}`}>SEE PRODUCT</button>
    )
}
