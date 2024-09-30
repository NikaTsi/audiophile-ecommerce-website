import React, { useState } from 'react';
import InputField from './inputField';

export default function Billing() {
    const billingDetails = [
        { id: 'name', label: 'Name', type: 'text', placeholder: 'Alexei Ward' },
        { id: 'email', label: 'Email Address', type: 'email', placeholder: 'alexei@mail.com',  },
        { id: 'phoneNumber', label: 'Phone Number', type: 'text', placeholder: '+1 202-555-0136' }
    ];

    return (
        <div className='flex flex-col w-full gap-6'>
            <h5 className='text-[13px] font-bold leading-[25px] tracking-[1px] text-[#d87d4a] '>BILLING DETAILS</h5>
            <div className='flex flex-col w-full gap-6'>
                {billingDetails.map((detail) => (
                    <InputField key={detail.id} {...detail} />
                ))}
            </div>
        </div>
    );
}
