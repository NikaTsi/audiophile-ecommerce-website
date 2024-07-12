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
        <div className='checkout__form-container'>
            <h5 className='checkout__subtitle'>Shipping info</h5>
            <div className='checkout__shipping'>
                {shippingInfo.map((info) => (
                    <InputField key={info.id} {...info} />
                ))}
            </div>
        </div>
    );
}
