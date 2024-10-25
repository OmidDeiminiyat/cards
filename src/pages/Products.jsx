import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export const Products = () => {
    const [products, setProducts] = useState()
    
    const {cartData} = useContext(CartContext)

    console.log('Cart data is:', cartData);
    useEffect(()=> {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data) => setProducts(data));
    }, [])


    return (
        <section>
             <h1>Products</h1>
             {products?.products.map((item) => { // question mark or &: thats mmean if there is no error, why error? if data is undefined 
                return (
                    <figure>
                        <h4>{item.title}</h4>
                        <p>{item.price}</p>
                        <button>Add to cart</button>
                    </figure>
                )
             })}
        </section>
        );
};