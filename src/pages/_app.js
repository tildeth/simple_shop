import { useState } from "react";
import NavBar from "@/components/NavBar";

function MyApp({ Component, pageProps }) {
    const [cart, setCart] = useState([]); // Global state til kurven
  
    // Beregn antal varer i kurven
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  
    return (
      <>
        <NavBar cartCount={cartCount} />
        {/* Giv cart og setCart videre som props til alle sider */}
        <Component {...pageProps} cart={cart} setCart={setCart} />
      </>
    );
  }
  
  export default MyApp;