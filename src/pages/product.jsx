import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Categories from '../components/categories';
import Advertisement from '../components/advertisement';
import Footer from '../components/footer';
import data from '../data.json';

function Product() {
    const { productId } = useParams();
    const [quantity, setQuantity] = useState(1); // State for quantity
    const [cart, setCart] = useState([]); // State for cart items

    let product = null;

    Object.values(data.cards).some(products => {
        const foundProduct = products.find(item => item.id === productId);
        if (foundProduct) {
            product = foundProduct;
        }
    });

    // Function to handle adding item to cart
    const addToCart = () => {
        const newItem = { ...product, quantity };
        setCart(prevCart => [...prevCart, newItem]);
        // You can also reset quantity here if needed
        // setQuantity(1);
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <main className='flex flex-col w-full items-center font-Manrope bg-[#fafafa]'>
            <Header />

            {
                <div className='flex flex-col w-full px-6 '>
                    <div><h3>Go Back</h3></div>

                    <div className='flex flex-col w-full '>

                        <img className="h-[202px] drop-shadow-3xl" src={require(`../assets${product.img}`)} alt={product.title} />
                        <div>
                            <span>{product.description}</span>
                            <h1>{product.title}</h1>
                            <h1>{product.paragraph}</h1>
                            <h1>{product.price}</h1>
                        </div>

                        <div>
                            <div className="quantity-selector">
                                <button onClick={decrementQuantity}>-</button>
                                <span>{quantity}</span>
                                <button onClick={incrementQuantity}>+</button>
                            </div>
                            <div>
                                <button onClick={addToCart}>Add to Cart</button>
                            </div>
                        </div>



                    </div>

                    <div>
                        <div>
                            <h3>FEATURES</h3>
                            <p>{product.features}</p>
                        </div>
                        <div>
                            <h3>IN THE BOX</h3>
                        </div>
                    </div>

                </div>
            }

            <Categories />
            <Advertisement />
            <Footer />
        </main>
    );
}

export default Product;
