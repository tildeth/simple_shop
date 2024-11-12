import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';

const ProductDetail = () => {

    const router = useRouter();
    const {id} = router.query;
    const [product, setProduct] = useState(null);

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

    if(!product) return <p>Loading...</p>;

    return ( 
    <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Pris: {product.price} DKK</p>
    </div>
     );
};
 
export default ProductDetail;
