import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './store';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div style={{ marginBottom: "20px", fontWeight: "bold" }}>
            Total Price: ${totalPrice.toFixed(2)}
          </div>
          {cartItems.map((item) => (
            <div key={item.uniqueId} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", width: "300px" }}>
              <img src={item.image} alt={item.title} style={{ width: "100px", height: "100px" }} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item.uniqueId))}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
