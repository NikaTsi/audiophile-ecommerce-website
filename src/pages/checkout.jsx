import React from 'react';
import { Link } from 'react-router-dom';
import Billing from '../components/checkout/billing'
import Payment from '../components/checkout/payment'
import Shipping from '../components/checkout/shipping'
import Summary from '../components/summary'

function Checkout() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted!');
  };

  return (
    <main className='flex flex-col w-full min-h-screen items-center font-Manrope px-6 bg-[#fafafa]'>

      <div className='flex w-full'>
        <div>
          <Link to={`/`} className='block font-medium text-[15px] leading-[25px] text-[#000] opacity-50 pt-4 pb-6'>Go Back</Link>
        </div>
      </div>

      <form className='flex flex-col w-full gap-[32px]' onSubmit={handleSubmit}>
        <section className='flex flex-col w-full bg-[#FFFFFF] px-6 pt-6 pb-8 gap-8 rounded-[8px]'>
          <h1 className='text-[28px] font-bold text-[#000000] tracking-[1px]'>CHECKOUT</h1>

          <Billing />
          <Shipping />
          <Payment />

        </section>

        <section className='flex flex-col w-full bg-[#FFFFFF] px-6 py-8 mb-[98px] rounded-[8px]'>
          <Summary />
          <input className='text-[13px] w-full text-[#ffffff] font-bold bg-[#d87d4a] py-[15px] cursor-pointer hover:opacity-90 duration-300' type="submit" value="CONTINUE & PAY" />
        </section>

      </form>

    </main>
  );
}

export default Checkout;
