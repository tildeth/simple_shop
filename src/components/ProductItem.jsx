const ProductItem = ({product, addToCart}) => {
    return ( 
        
        <li className="product_item">
           
                {product.title}
           
            <button onClick={() => addToCart(product)}>Tilføj til kurv</button>

        </li>
    
     );
};
 
export default ProductItem;