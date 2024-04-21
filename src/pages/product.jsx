import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/header';
import Categories from '../components/categories';
import Advertisement from '../components/advertisement';
import Footer from '../components/footer';
import data from '../data.json';

function Product() {
    const { productId, category } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const cartFromStorage = localStorage.getItem('cart');
        if (cartFromStorage) {
            setCart(JSON.parse(cartFromStorage));
        }
    }, []);

    useEffect(() => {
        const foundProduct = data.cards[category]?.find(item => item.id === productId);
        setProduct(foundProduct);
    }, [productId, category]);

    const addToCart = () => {
        const newItem = { name: product.name, title: product.title, price: product.price, quantity };
        const itemExistsIndex = cart.findIndex(item => item.title === product.title);

        if (itemExistsIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[itemExistsIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, newItem]);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
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
            <div className='flex flex-col w-full px-6 '>

                <Link to={`/${category}`}>
                    <button>Go back</button>
                </Link>
                
                {product && (
                    <div className='flex flex-col w-full '>
                        <div>
                            <img className="h-[202px] drop-shadow-3xl" src={require(`../assets${product.img}`)} alt={product.title} />
                        </div>
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
                )}
                <div>
                    <div>
                        <h3>FEATURES</h3>
                        <p>{product?.features}</p>
                    </div>
                    <div>
                        <h3>IN THE BOX</h3>
                    </div>
                </div>
            </div>
            <Categories />
            <Advertisement />
            <Footer />
        </main>
    );
}

export default Product;
