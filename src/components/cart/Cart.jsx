import { useContext, useState } from "react";
import { SiV } from "react-icons/si";
import { CartContext } from "../../context/CartContext";
import  style  from "./cart.module.scss";

export const Card = () => {

    const {cartData, clearCart, removeFromCart, subtractFromCart, addToCart} = useContext(CartContext);
    // const [cartData, setCartData] = useState();
    
    return(
        <>
            
            <div className={style.myCard} >
                {cartData?.map((item) => {
                    return(
                       <div style={{display: "flex", flexDirection: "row" }} >
                        <h5>{item.title}</h5>
                        <p>{item.price}</p>

                        <div style={{display: "grid"}}><button onClick={() => subtractFromCart(item)}  >-</button><p>{item.quantity}</p><button onClick={() => addToCart(item)} >+</button></div> 
                        <p>total {item.price + item.quantity}</p>
                        <button onClick={() => addToCart(item)}></button>
                        <button onClick={()=> removeFromCart(item)} >Remove</button>
                       </div>

                    );
                })}
                <button onClick={()=> clearCart()}>Empty Cart</button>
            </div>
        </>
    );
};