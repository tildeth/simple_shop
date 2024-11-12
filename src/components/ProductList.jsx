import ProductItem from "./ProductItem"

const ProductList = ({products, addToCart}) => {
    return ( 
        <ul>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
        </ul>
     );
};
 
export default ProductList;