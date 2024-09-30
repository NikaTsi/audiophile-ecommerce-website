import React from 'react';

export default function InputField({ id, label, type, placeholder, value, onChange }) {
    return (
        <div className='flex flex-col w-full gap-[9px]'>
            <label htmlFor={id} className='text-[12px] font-bold text-[#000000]'>
                {label}
            </label>
            <input
                required
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='h-[56px] w-full rounded-[8px] px-6 text-6 text-[#00000] border-[1px] border-[#cfcfcf]'
            />
        </div>
    );
}
