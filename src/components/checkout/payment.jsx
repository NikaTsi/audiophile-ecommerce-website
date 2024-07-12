import React from 'react';
import InputField from './inputField';

export default function Payment() {
    const paymentDetails = [
        { id: 'emoneyNumber', label: 'e-Money Number', type: 'text', placeholder: '238521993' },
        { id: 'emoneyPin', label: 'e-Money PIN', type: 'text', placeholder: '6891' }
    ];

    return (
        <div className='checkout__form-container'>
            <h5 className='checkout__subtitle'>Payment details</h5>
            <div className='checkout__payment'>
                {paymentDetails.map((detail) => (
                    <InputField key={detail.id} {...detail} />
                ))}
            </div>
        </div>
    );
}
