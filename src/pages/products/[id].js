import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import Image from 'next/image';

const ProductDetail = ({cart, setCart, addToCart}) => {

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

    const handleAddToCart = () => {
        addToCart(product)
 };
    return ( 
    <div className='product_detail'>
        <button className="back_button" onClick={() => router.back()}>Tilbage</button>
        <div className="product_content">
        <div className="single_image">
        <Image
        src={product.images[0]}
        alt={product.title}
        width={500} 
        height={500} 
        layout="responsive"
            className="image_single" />
        </div>
        <div className="product_info">
        <h1 className="single_title">{product.title}</h1>
        <p className="product_description">{product.description}</p>
        <p  className="single_price">Pris: {product.price} DKK</p>
        <button className="add_to_cart" onClick={handleAddToCart}>Tilføj til kurv</button>
        </div>
        </div>
    </div>
     );
};
 
export default ProductDetail;
