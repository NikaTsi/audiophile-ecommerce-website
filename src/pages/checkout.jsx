import React from 'react';
// import data from '../data.json';
import Billing from '../components/checkout/billing'
import Payment from '../components/checkout/payment'
import Shipping from '../components/checkout/shipping'

function Checkout() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted!');
  };

  return (
    <main className='flex flex-col w-full min-h-screen items-center font-Manrope bg-[#fafafa]'>
      <span>Go Back</span>

      <section>
        <h1>CHECKOUT</h1>

        <form onSubmit={handleSubmit}>
          <Billing />
          <Shipping />
          <Payment />

          <input type="submit" value="Submit" className="submit-button" />
        </form>
      </section>
    </main>
  );
}

export default Checkout;
