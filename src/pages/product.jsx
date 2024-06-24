import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/header';
import Categories from '../components/categories';
import Advertisement from '../components/advertisement';
import Footer from '../components/footer';
import OtherProducts from '../components/otherProducts';
import data from '../data.json';

function Product() {
    const { productId, category } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const cartFromStorage = localStorage.getItem('cart');
        if (!cartFromStorage || cartFromStorage === '[]') {
            setCart([]);
        } else {
            setCart(JSON.parse(cartFromStorage));
        }
    }, []);

    useEffect(() => {
        const foundProduct = data.cards[category]?.find(item => item.id === productId);
        setProduct(foundProduct);
    }, [productId, category]);

    const addToCart = () => {
        const newItem = { name: product.name, title: product.title, price: product.price, quantity, img: product.img };
        const itemExistsIndex = cart.findIndex(item => item.title === product.title);

        let updatedCart;
        if (itemExistsIndex !== -1) {
            updatedCart = [...cart];
            updatedCart[itemExistsIndex].quantity += quantity;
        } else {
            updatedCart = [...cart, newItem];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleClear = () => {
        localStorage.removeItem('cart')
        setCart([])
    }

    let imageHeight = ["h-[174px]", "h-[174px]", "h-[368px]"]


    return (
        <main className='flex flex-col w-full items-center font-Manrope bg-[#fafafa]'>
            <Header handleClear={handleClear} />

            <div className='flex flex-col w-full px-6 '>

                <Link to={`/${category}`} className='font-medium text-[15px] leading-[25px] text-[#000] opacity-50 pt-4 pb-6'>Go Back</Link>

                {product && (
                    <div className='flex flex-col w-full gap-8'>
                        <div className='flex w-full justify-center pt-[56px] h-[327px] bg-[#f1f1f1] rounded-[8px]'>
                            <img className="h-[202px] drop-shadow-3xl" src={require(`../assets${product.img}`)} alt={product.title} />
                        </div>
                        <div className='flex flex-col gap-6'>
                            <span className='text-[14px] font-normal text-[#d87d4a] tracking-[10px]'>{product.description}</span>
                            <h1 className='text-[28px] font-bold text-[#000] tracking-[1px] leading-[38px]'>{product.title}</h1>
                            <h1 className='text-[15px] font-medium text-[#000] opacity-50 leading-[25px]'>{product.paragraph}</h1>
                            <h1 className='text-[18px] font-bold text-[#000] tracking-[1.3px]'>{product.price}</h1>
                        </div>
                        <div className='flex w-full gap-4'>
                            <div className="flex h-12 w-[120px] gap-5 items-center justify-center bg-[#f1f1f1]">
                                <button className='flex items-center justify-center w-4 h-[18px]' onClick={decrementQuantity}>-</button>
                                <span className='font-bold text-[13px] tracking-[1px] text-[#000]'>{quantity}</span>
                                <button className='flex items-center justify-center w-4 h-[18px]' onClick={incrementQuantity}>+</button>
                            </div>
                            <button className='font-bold w-40 h-[48px] bg-[#d87d4a] text-[13px] tracking-[1px] text-[#FFF]' onClick={addToCart}>ADD TO CART</button>
                        </div>
                    </div>
                )}

                {product && (<div>
                    <div className='flex flex-col py-[88px] gap-6'>
                        <h3 className='text-[24px] leading-[36px] font-bold text-[#000] tracking-[0.8px]'>FEATURES</h3>
                        <p className='text-[15px] font-medium text-[#000] opacity-50 leading-[25px]'>{product.features}</p>
                    </div>
                    <div className='flex flex-col pb-[88px] gap-6'>
                        <h3 className='text-[24px] leading-[36px] font-bold text-[#000] tracking-[0.8px]'>IN THE BOX</h3>
                        <div className='flex flex-col gap-[8px]'>
                            {product.box.amount.map((amount, index) => (
                                <div className='flex gap-6' key={index}>
                                    <span className='text-[15px] font-bold text-[#d87d4a] leading-[25px]'>{amount}</span>
                                    <span className='text-[15px] font-medium text-[#000] opacity-50 leading-[25px]'>{product.box.items[index]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>)}

                <div className='flex flex-col w-full items-center gap-5'>
                    {product && (
                        product.images.map((item, index) => (
                            <div className='flex w-full items-center' key={index}>
                                <img className={`w-full rounded-[8px] object-cover ${imageHeight[index]}`} src={require(`../assets${item}`)} alt={product.title} />
                            </div>
                        ))
                    )}
                </div>

                <div className='flex w-full justify-center mt-[120px]'>
                    <h1 className='text-[26px] font-bold text-[#000] tracking-[0.9px] leading-[36px]'>YOU MAY ALSO LIKE</h1>
                </div>

                {product && <OtherProducts product={product} />}

            </div>

            <Categories />
            <Advertisement />
            <Footer />
        </main>
    );
}

export default Product;
