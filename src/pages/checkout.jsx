import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Billing from '../components/checkout/billing'
import Payment from '../components/checkout/payment'
import Shipping from '../components/checkout/shipping'
import Summary from '../components/summary'
import Confirmation from '../components/confirmation'

function Checkout() {
  const [submission, setSubmission] = useState(false)

  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

  const handleSubmit = (e) => {
    e.preventDefault()
    if (true && storedCart.length > 0) {
      setSubmission(true)
    } else {
      alert("YOUR CART IS EMPTY!")
    }
  };

  return (
    <main className='relative flex flex-col w-full min-h-screen items-center font-Manrope px-6 bg-[#fafafa] md:px-10'>

      {submission && (
        <div className='absolute top-0 flex flex-col w-full h-full z-[100]'>
          <Confirmation />
        </div>
      )}

      <section className='flex flex-col w-full xl:w-[1280px]'>
        <div className='flex w-full'>
          <div>
            <Link to={`/`} className='block font-medium text-[15px] leading-[25px] text-[#000] opacity-50 pt-4 pb-6 md:pt-[48px]'>Go Back</Link>
          </div>
        </div>

        <form className='flex flex-col w-full gap-[32px] lg:flex-row md:gap-10' onSubmit={handleSubmit}>

          <section className='flex flex-col w-full bg-[#FFFFFF] px-6 pt-6 pb-8 gap-8 rounded-[8px] lg:mb-[141px]'>
            <h1 className='text-[28px] font-bold text-[#000000] tracking-[1px] md:text-[32px] md:leading-[36px]'>CHECKOUT</h1>

            <Billing />
            <Shipping />
            <Payment />

          </section>

          <section className='flex flex-col w-full bg-[#FFFFFF] px-6 py-8 mb-[98px] rounded-[8px] gap-8 lg:w-[473px] lg:mb-10 xl:h-full'>
            <Summary />
            <input className='text-[13px] w-full text-[#ffffff] font-bold bg-[#d87d4a] py-[15px] cursor-pointer hover:opacity-90 duration-300' type="submit" value="CONTINUE & PAY" />
          </section>

        </form>
      </section>

    </main>
  );
}

export default Checkout;
