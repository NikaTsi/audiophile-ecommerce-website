import React from 'react'

function Summary() {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = storedCart.length > 0 ? "$ " + storedCart.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace('$', '').replace(/,/g, '').trim());
      return total + itemPrice * item.quantity;
      console.log(itemPrice);
    }, 0).toFixed(2)
  : "$0";

    return (
        <section className='flex flex-col w-full'>
            <h1>SUMMARY</h1>

            <div className='flex flex-col'>
                {storedCart.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">

                        <div>
                            <img src={require(`../assets${item.img}`)} className='w-12 h-12 rounded-[8px]' alt={item.title} />
                        </div>

                        <div>
                            <h5>{item.name}</h5>
                            <h6>{item.price}</h6>
                        </div>

                        <span>x{item.quantity}</span>
                    </div>
                ))}
            </div>


            <div>
                <div className='flex'>
                    <h6>TOTAL</h6>
                    <span>{total}</span>
                </div>
                <div className='flex'>
                    <h6>SHIPPING</h6>
                    <span>$50</span>
                </div>
                <div className='flex'>
                    <h6>VAT(INCLUDED)</h6>
                    <span>$1,079</span>
                </div>
            </div>

            <div>
                <h1>GRAND TOTAL</h1><span>{total + 50 + 1079}</span>
            </div>

        </section>
    )
}

export default Summary