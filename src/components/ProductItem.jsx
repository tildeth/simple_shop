import Link from "next/link";

const ProductItem = ({product, addToCart}) => {
    return ( 
        <li>
            <Link href={`/products/${product.id}`}>
                {product.title}
            </Link>
            <button onClick={() => addToCart(product)}>Tilføj til kurv</button>
        </li>
     );
};
 
export default ProductItem;