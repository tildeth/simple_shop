import Link from "next/link";

const ProductItem = ({product, addToCart}) => {
    return ( 
        <li className="product_item">
            <Link href={`/products/${product.id}`}>
                {product.title}
            </Link>
            <button onClick={() => addToCart(product)}>Tilføj til kurv</button>

        </li>
     );
};
 
export default ProductItem;