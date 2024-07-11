import React from 'react';
import data from '../data.json';

function Checkout() {
  const { titles, billingDetails, shippingInfo, paymentDetails } = data.inputData;

  return (
    <main className='flex flex-col w-full min-h-screen items-center font-Manrope bg-[#fafafa]'>
      <section>
        <h1>CHECKOUT</h1>
        <div>
          {titles.map((title, index) => (
            <div key={index}>
              <h2>{title}</h2>
              {title === "BILLING DETAILS" && (
                <div>
                  {billingDetails.map((item, index) => (
                    <div key={index} className='flex flex-col mb-4'>
                      <label>{item.label}</label>
                      <input
                        type="text"
                        placeholder={item.placeholder}
                        className='border p-2'
                      />
                    </div>
                  ))}
                </div>
              )}
              {title === "SHIPPING INFO" && (
                <div>
                  {shippingInfo.map((item, index) => (
                    <div key={index} className='flex flex-col mb-4'>
                      <label>{item.label}</label>
                      <input
                        type="text"
                        placeholder={item.placeholder}
                        className='border p-2'
                      />
                    </div>
                  ))}
                </div>
              )}
              {title === "PAYMENT DETAILS" && (
                <div>
                  {paymentDetails.map((item, index) => (
                    <div key={index} className='flex flex-col mb-4'>
                      <label>{item.label}</label>
                      <input
                        type="text"
                        placeholder={item.placeholder}
                        className='border p-2'
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Checkout;
