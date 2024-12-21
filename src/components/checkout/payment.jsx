import React, { useState } from 'react';
import InputField from './inputField';

export default function Payment() {
    const [selectedOption, setSelectedOption] = useState("e-Money");

    const paymentDetails = [
        { id: 'emoneyNumber', label: 'e-Money Number', type: 'text', placeholder: '238521993' },
        { id: 'emoneyPin', label: 'e-Money PIN', type: 'text', placeholder: '6891' }
    ];

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className='flex flex-col w-full gap-8'>
            <h5 className='text-[13px] font-bold leading-[25px] tracking-[1px] text-[#d87d4a]'>PAYMENT DETAILS</h5>

            <div className='flex flex-col w-full gap-6 md:grid md:grid-cols-2'>
                <label className='text-[12px] font-bold text-[#00000]'>Payment Method</label>

                <div className='flex flex-col w-full gap-6'>
                    <div className={`flex pl-4 items-center h-[56px] w-full gap-4 border rounded-[8px] ${selectedOption == "e-Money" ? "border-[#d87d4a]" : "border-[#cfcfcf]"}`}>
                        <input
                            className='accent-[#d87d4a] w-[20px] h-[20px] cursor-pointer'
                            type="radio"
                            name="paymentMethod"
                            value="e-Money"
                            checked={selectedOption === "e-Money"}
                            onChange={handleChange}
                        />
                        <label className='text-[14px] font-bold text-[#00000]'>e-Money</label>
                    </div>

                    <div className={`flex pl-4 items-center h-[56px] w-full gap-4 border rounded-[8px] ${selectedOption == "Cash on Delivery" ? "border-[#d87d4a]" : "border-[#cfcfcf]"}`}>
                        <input
                            className='accent-[#d87d4a] w-[20px] h-[20px] cursor-pointer'
                            type="radio"
                            name="paymentMethod"
                            value="Cash on Delivery"
                            checked={selectedOption === "Cash on Delivery"}
                            onChange={handleChange}
                        />
                        <label className='text-[14px] font-bold text-[#00000]'>Cash on Delivery</label>
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-full gap-6 '>
                {selectedOption === "e-Money" && (
                    <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
                        {paymentDetails.map((detail) => (
                            <InputField key={detail.id} {...detail} />
                        ))}
                    </div>
                )}
            </div>
            
        </div>
    );
}
