const Cart = ({cart}) => {
    return (  
        <div>
            <h2>Kurv ({cart.length} varer)</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.title} - {item.price} DKK
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default Cart;