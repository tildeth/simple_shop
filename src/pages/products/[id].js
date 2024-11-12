import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';

const ProductDetail = () => {

    const router = useRouter();
    const {id} = router.query;    // Henter produkt-ID fra URL'en
    const [product, setProduct] = useState(null);  // Holder data for det valgte produkt


    //Henter produktdetaljer fra API'en
    useEffect(() =>{
        if (id){
            const fetchProduct = async () => {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            };
            fetchProduct();
        }
    }, [id]);

    if(!product) return <p>Loading...</p>;  //Viser Loading, Hvis produktdata ikke er hentet

    return ( 
    <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Pris: {product.price} DKK</p>
    </div>
     );
};
 
export default ProductDetail;
