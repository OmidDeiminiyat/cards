import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import supabase from './../DB/supabaseClient';

export const Products = () => {

    const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const {cartData, addToCart} = useContext(CartContext)


  useEffect(() => {
    // Function to fetch data from Supabase
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*'); // Fetches all columns from 'product' table

      if (error) {
        console.error("Error fetching products:", error.message);
      } else {
        setProducts(data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;


  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(item)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

    /*
    const [products, setProducts] = useState()
    
    const {cartData, addToCart} = useContext(CartContext)

    console.log('Cart data is:', cartData);
    useEffect(()=> {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data) => setProducts(data));
    }, [])
*/

/*
    return (
        
        <section>
             <h1>Products</h1>
             {products?.products.map((item) => { // question mark or &: thats mmean if there is no error, why error? if data is undefined 
                return (
                    <figure>
                        <h4>{item.title}</h4>
                        <p>{item.price}</p>
                        <button onClick={() => addToCart(item)}>Add to cart</button>
                    </figure>
                );
             })}
        </section>
        
        );
        
};
*/