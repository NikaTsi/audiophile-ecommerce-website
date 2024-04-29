import React from 'react'

export default function Button({ background, text, border, hoverBackground, hoverText }) {
    return (
        <button className={`text-[13px] ${text} ${border ? "border " + border : ""} tracking-[1px] font-bold w-[160px] h-12 ${background} ${hoverBackground} ${hoverText} duration-300 active:opacity-90`}>SEE PRODUCT</button>
    )
}
