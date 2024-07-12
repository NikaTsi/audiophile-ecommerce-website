import React, { useState } from 'react';
import InputField from './inputField';

export default function Billing() {
    const billingDetails = [
        { id: 'name', label: 'Name', type: 'text', placeholder: 'Alexei Ward' },
        { id: 'email', label: 'Email Address', type: 'email', placeholder: 'alexei@mail.com',  },
        { id: 'phoneNumber', label: 'Phone Number', type: 'number', placeholder: '+1 202-555-0136' }
    ];

    return (
        <div className='checkout__form-container'>
            <h5 className='checkout__subtitle'>Billing details</h5>
            <div className='checkout__billing'>
                {billingDetails.map((detail) => (
                    <InputField key={detail.id} {...detail} />
                ))}
            </div>
        </div>
    );
}
