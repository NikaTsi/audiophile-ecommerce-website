import React from 'react';
import InputField from './inputField';

export default function Payment() {
    const paymentDetails = [
        { id: 'emoneyNumber', label: 'e-Money Number', type: 'text', placeholder: '238521993' },
        { id: 'emoneyPin', label: 'e-Money PIN', type: 'text', placeholder: '6891' }
    ];

    return (
        <div className='flex flex-col w-full gap-6'>
            <h5 className='text-[13px] font-bold leading-[25px] tracking-[1px] text-[#d87d4a] '>Payment details</h5>
            <div className='flex flex-col w-full gap-6'>
                {paymentDetails.map((detail) => (
                    <InputField key={detail.id} {...detail} />
                ))}
            </div>
        </div>

    );
}
