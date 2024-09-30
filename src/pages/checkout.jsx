import React from 'react';
import { Link } from 'react-router-dom';
import Billing from '../components/checkout/billing'
import Payment from '../components/checkout/payment'
import Shipping from '../components/checkout/shipping'

function Checkout() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted!');
  };

  return (
    <main className='flex flex-col w-full min-h-screen items-center font-Manrope px-6 bg-[#fafafa]'>

      <div>
        <Link to={`/`} className='inline-block font-medium text-[15px] leading-[25px] text-[#000] opacity-50 pt-4 pb-6'>Go Back</Link>
      </div>

      <section className='flex flex-col w-full mb-8 bg-[#FFFFFF] p-6 gap-8 rounded-[8px]'>
        <h1 className='text-[28px] font-bold text-[#000000] tracking-[1px]'>CHECKOUT</h1>

        <form className='flex flex-col w-full gap-[32px]' onSubmit={handleSubmit}>
          <Billing />
          <Shipping />
          <Payment />
        </form>

        <div>
          
          <input className='text-[13px] text-[#ffffff] font-bold bg-[#d87d4a] py-[15px]' type="submit" value="CONTINUE & PAY" />
        </div>

      </section>
    </main>
  );
}

export default Checkout;
