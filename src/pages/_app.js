import { useState } from "react";
import NavBar from "@/components/NavBar";

function MyApp({ Component, pageProps }) {
    const [cart, setCart] = useState([]); // Global state til kurven
  
    // Beregn antal varer i kurven
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.product.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { product, quantity: 1 }];
            }
        });
    };
  
    return (
      <>
        <NavBar cartCount={cartCount} />
        <Component {...pageProps} cart={cart} setCart={setCart} addToCart={addToCart} />
      </>
    );
  }
  
  export default MyApp;