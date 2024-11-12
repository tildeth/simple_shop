import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PaymentPage = () => {

    const router = useRouter();
    const {items} = router.query;  // Henter produkt-ID'er fra URL-parametre
    const [products, setProducts] = useState([]);  // Holder data for produkterne i kurven

    // Henter produktdata baseret på de angivne ID'er i items
    useEffect(() => {
        if(items){
            const fetchProducts = async () => {
                const productIds = items.split(',');  // Deler ID'erne i items op i en array
                const responses = await Promise.all(
                    productIds.map((id) => fetch(`https://dummyjson.com/products/${id}`))
                );
                const productsData = await Promise.all(responses.map((res) => res.json()));
                setProducts(productsData);  // Sætter de hentede produktdata i products state. Promise.all udfører paralelle API-kald, der sørger for alle valgte produkter kommer i kurven på sammetid.
            };
            fetchProducts();
        }
    }, [items]);  // Kører når items ændrer sig

    return ( 
        <div>
            <h1>Betaling</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <p>{product.title} - {product.price} DKK</p>
                    </li>
                ))}
            </ul>
            <button>Betal nu</button>
        </div>
     );
};
 
export default PaymentPage;