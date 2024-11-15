import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PaymentPage = () => {
  const router = useRouter();
  const { totalPrice } = router.query;
  const { items } = router.query; // Henter produkt-ID'er fra URL-parametre
  const [products, setProducts] = useState([]); // Holder data for produkterne i kurven
  

  // Henter produktdata baseret på de angivne ID'er i items
  useEffect(() => {
    if (router.isReady && items) {
      const fetchProducts = async () => {
        const productIds = items.split(","); // Deler ID'erne i items op i en array
        const responses = await Promise.all(
          productIds.map((id) => fetch(`https://dummyjson.com/products/${id}`))
        );
        const productsData = await Promise.all(
          responses.map((res) => res.json())
        );
        setProducts(productsData); // Sætter de hentede produktdata i products state. Promise.all udfører paralelle API-kald, der sørger for alle valgte produkter kommer i kurven på sammetid.
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
              {product.title} - {product.price} DKK
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
