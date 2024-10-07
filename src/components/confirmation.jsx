import React from 'react'
import { Link } from 'react-router-dom'
import checked from '../assets/checkout/Group 12.svg'

function Confirmation() {

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    const total = storedCart.length > 0
        ? storedCart.reduce((total, item) => {
            const itemPrice = parseFloat(item.price.replace('$', '').replace(/,/g, '').trim());
            return total + itemPrice * item.quantity;
        }, 0) : 0;

    const grandTotal = (total + 50).toLocaleString();

    if (storedCart.length === 0) {
        return <h1>Your cart is empty</h1>;
    }

    const displayItem = storedCart[0];

    return (
        <section className='sticky flex realtive flex-col w-full top-0 items-center px-6 font-Manrope'>
            <div className='flex flex-col gap-6 p-8 w-full bg-[#FFFFFF] mt-[134px] z-10 rounded-[8px]'>

                <div>
                    <img className='w-[64px] h-[64px]' src={checked} alt="Order Confirmation Check" />
                </div>

                <div>
                    <h1 className='mb-4 text-[24px] text-[#00000] tracking-[0.8px] font-bold leading-[28px]'>THANK YOU <br /> FOR YOUR ORDER</h1>
                    <p className='text-[15px] leading-[25px] text-[#00000] opacity-50'>You will receive an email confirmation shortly.</p>
                </div>

                <div className='flex flex-col'>
                    <div className='flex flex-col w-full gap-3 bg-[#f1f1f1] p-6 rounded-t-[8px]'>
                        <div className='flex justify-between items-start'>

                            <div className='flex gap-4'>
                                <img src={require(`../assets${displayItem.img}`)} className='w-[40px] h-[40px] pt-[9px]' alt={displayItem.name} />

                                <div>
                                    <h2 className='text-[15px] leading-[25px] text-[#000000] font-bold'>{displayItem.name}</h2>
                                    <p className='text-[14px] text-[#000000] font-bold opacity-50'>{displayItem.price}</p>
                                </div>
                            </div>

                            <span className='text-[14px] text-[#000000] font-bold opacity-50'>x{displayItem.quantity}</span>

                        </div>

                        <div className='border-t-[1px] border-[#000000] opacity-[0.08]'></div>

                        {storedCart.length > 1 && (
                            <div className='flex w-full justify-center'>
                                <p className='text-[12px] text-[#000000] font-bold opacity-50'>and {storedCart.length - 1} other item(s)</p>
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col gap-2 w-full pt-[15px] pb-[20px] px-6 bg-[#000000] rounded-b-[8px]'>
                        <h1 className='text-[15px] text-[#ffffff] leading-[25px] font-medium opacity-50 tracking-[1px]'>GRAND TOTAL</h1>
                        <span className='text-[18px] text-[#ffffff] font-bold tracking-[1px]'>$ {grandTotal}</span>
                    </div>
                </div>

                <Link to={"/"}>
                    <input className='text-[13px] w-full text-[#ffffff] font-bold bg-[#d87d4a] py-[15px] cursor-pointer hover:opacity-90 duration-300' type="submit" value="BACK TO HOME" />
                </Link>

            </div>

            <div className={`absolute top-0 left-0 flex w-full min-h-[100vh] bg-[#000] opacity-40 `}></div>

        </section>
    )
}

export default Confirmation;
