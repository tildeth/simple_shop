import ProductItem from "./ProductItem"
import Image from "next/image";

const ProductList = ({products, addToCart}) => {
    return ( 
        <ul>
            {products.map((product) => (
        <li key={product.id}>  
          <Image
            src={product.images[0]}
            alt={product.title}
            width={150}
            height={150} 
          />
          <ProductItem
            product={product}
            addToCart={addToCart}
          />
        </li>
      ))}
        </ul>
     );
};
 
export default ProductList;

