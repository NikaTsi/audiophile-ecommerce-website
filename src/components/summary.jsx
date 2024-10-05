import React from 'react'

function Summary() {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    const total = storedCart.length > 0
    ? storedCart.reduce((total, item) => {
        const itemPrice = parseFloat(item.price.replace('$', '').replace(/,/g, '').trim());
        return total + itemPrice * item.quantity;
    }, 0) : 0;

    const formattedTotal = total.toLocaleString()


    const grandTotal = (total + 50 + 1079).toLocaleString()


    return (
        <section className='flex flex-col w-full gap-8'>
            <h1 className='text-[#000000] text-[18px] font-bold tracking-[1.3px]'>SUMMARY</h1>

            <div className='flex flex-col gap-6'>
                {storedCart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className='flex items-center'>

                            <div className='flex justify-center items-center rounded-[8px] w-[64px] h-[64px] bg-[#f1f1f1]'>
                                <img src={require(`../assets${item.img}`)} className='w-12 h-12 rounded-[8px]' alt={item.title} />
                            </div>

                            <div className='ml-4'>
                                <h5 className='text-[#000000] text-[15px] font-bold leading-[25px]'>{item.name}</h5>
                                <h6 className='text-[#000000] text-[14px] font-bold leading-[24px] opacity-50'>{item.price}</h6>
                            </div>
                        </div>

                        <span className='text-[#000000] text-[15px] font-bold leading-[25px] opacity-50'>x{item.quantity}</span>
                    </div>
                ))}
            </div>


            <div className='flex flex-col w-full gap-2'>
                <div className='flex justify-between'>
                    <h6 className='text-[#000000] text-[15px] font-medium leading-[25px] opacity-50'>TOTAL</h6>
                    <span className='text-[#000000] text-[18px] font-bold'>$ {formattedTotal}</span>
                </div>
                <div className='flex justify-between'>
                    <h6 className='text-[#000000] text-[15px] font-medium leading-[25px] opacity-50'>SHIPPING</h6>
                    <span className='text-[#000000] text-[18px] font-bold'>$ {total !== 0 ? 50 : 0}</span>
                </div>
                <div className='flex justify-between'>
                    <h6 className='text-[#000000] text-[15px] font-medium leading-[25px] opacity-50'>VAT(INCLUDED)</h6>
                    <span className='text-[#000000] text-[18px] font-bold'>$ {total !== 0 ? "1,079" : 0}</span>
                </div>
            </div>

            <div className='flex justify-between'>
                <h1 className='text-[#000000] text-[15px] font-medium leading-[25px] opacity-50'>GRAND TOTAL</h1><span className='text-[#d87d4a] text-[18px] font-bold'>$ {total !== 0 ? grandTotal : 0}</span>
            </div>

        </section>
    )
}

export default Summary