import React from 'react';

export default function InputField({ id, label, type, placeholder, value, onChange, classNameLabel, classNameInput }) {
    return (
        <div className='form-container'>
            <label htmlFor={id} className={classNameLabel}>
                {label}
            </label>
            <input
                required
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={classNameInput}
            />
        </div>
    );
}
