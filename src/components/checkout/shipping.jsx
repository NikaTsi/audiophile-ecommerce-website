import React from 'react';
import InputField from './inputField';

export default function Shipping() {
    const shippingInfo = [
        { id: 'address', label: 'Your Address', type: 'text', placeholder: '1137 Williams Avenue' },
        { id: 'zip', label: 'ZIP Code', type: 'text', placeholder: '10001' },
        { id: 'city', label: 'City', type: 'text', placeholder: 'New York' },
        { id: 'country', label: 'Country', type: 'text', placeholder: 'United States' }
    ];

    return (
        <div className='flex flex-col w-full gap-6'>
            <h5 className='text-[13px] font-bold leading-[25px] tracking-[1px] text-[#d87d4a] '>SHIPPING INFO</h5>
            <div className='flex flex-col w-full gap-6 md:grid md:grid-cols-2'>
                {shippingInfo.map((info) => (
                    <InputField key={info.id} {...info} />
                ))}
            </div>
        </div>

    );
}
