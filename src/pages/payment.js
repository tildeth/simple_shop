import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PaymentPage = ({addToCart, removeFromCart}) => {
  const router = useRouter();
  const { totalPrice } = router.query;
  const { items, toalPrice } = router.query; // Henter produkt-ID'er fra URL-parametre
  const [products, setProducts] = useState([]); // Holder data for produkterne i kurven
  

  // Henter produktdata baseret på de angivne ID'er i items
  useEffect(() => {
    if (router.isReady && items) {
      const fetchProducts = async () => {
        const itemData = items.split(",").map((item)=> {
          const [id, quantity] = item.split(":");
          return {id, quantity: parseInt(quantity,10)};
        })
        
        const responses = await Promise.all(
          itemData.map(({id}) => fetch(`https://dummyjson.com/products/${id}`))
        );
        const productsData = await Promise.all(
          responses.map((res) => res.json())
        );

        const productsWithQuantities = productsData.map((product, index)=> ({
          ...product,
          quantity: itemData[index].quantity,
        }));

        setProducts(productsWithQuantities); 
      };
      fetchProducts();
    }
  }, [router.isReady, items]); // Kører når items ændrer sig

  return (
    <div className="payment_page">
      <h1>Betaling</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product_item">
            <p>
              {product.title} - {product.price} DKK ({product.quantity} stk.)
            </p>
           
          </li>
        ))}
      </ul>
      <p>At betale {totalPrice} DKK</p>
      <button className="betal_nu">Betal nu</button>
    </div>
  );
};

export default PaymentPage;
