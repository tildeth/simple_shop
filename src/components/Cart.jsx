import Link from "next/link";

const Cart = ({cart, addToCart, removeFromCart}) => {

//Beregning af den samlet pris
const totalPrice = cart.reduce((total, item) => total +item.product.price * item.quantity, 0).toFixed(2);

const itemsIds = cart.map((item) => item.product.id).join(',');

    return (  
        <div>
            <h2>Kurv ({totalPrice} DKK)</h2>  {/* Viser samlet pris i kurven */}
            <ul>
                {cart.map((item) => (
                    <li key={item.product.id}>
                        {item.product.title} - {item.product.price} DKK - Antal: {item.quantity}
                        <button onClick={() => addToCart(item.product)}>+</button>
                        <button onClick={() => removeFromCart(item.product)}>-</button>
                    </li>
                ))}
            </ul>
            {/*Link til betalingssiden, hvor de valgtes produkters id er som URL-parameter */}
            <Link href={`/payment?items=${itemsIds}`}>
                Gå til betaling ({totalPrice} DKK)
            </Link>
        </div>
    );
}
 
export default Cart;