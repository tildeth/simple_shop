import Link from "next/link";

const Cart = ({ cart, addToCart, removeFromCart }) => {
  //Beregning af den samlet pris
  const totalPrice = cart
    .reduce((total, item) => total + item.product.price * item.quantity, 0)
    .toFixed(2);

  const itemsIds = cart.map((item) => item.product.id).join(",");

  return (
    <div className="cart">
      <h2 className="cart_header">Kurv ({totalPrice} DKK)</h2>
      {/* Viser samlet pris i kurven */}
      <div className="cart_items">
        {cart.map((item) => (
          <div key={item.product.id} className="cart_item">
            <div className="cart_item_details">
              <span className="product_title">{item.product.title}</span>
              <span className="product_price">{item.product.price} DKK</span>
              <span className="product_quantity">Antal: {item.quantity}</span>
            </div>
            <div className="cart_item_buttons">
              <button
                className="cart_button add"
                onClick={() => addToCart(item.product)}
              >
                +
              </button>
              <button
                className="cart_button remove"
                onClick={() => removeFromCart(item.product)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      {/*Link til betalingssiden, hvor de valgtes produkters id er som URL-parameter */}
      <Link href={`/payment?items=${itemsIds}&totalPrice=${totalPrice}`}className="cart_payment_link">
        Gå til betaling ({totalPrice} DKK)
      </Link>
    </div>
  );
};

export default Cart;
