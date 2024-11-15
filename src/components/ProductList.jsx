import ProductItem from "./ProductItem"
import Image from "next/image";

const ProductList = ({products, addToCart}) => {
    return ( 
        <ul className="product_list">
            {products.map((product) => (
        <li key={product.id} className="product_item">  
        <div className="product_image">
          <Image
            src={product.images[0]}
            alt={product.title}
            width={150}
            height={150} 
            layout="intrinsic"
          />
          </div>
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

