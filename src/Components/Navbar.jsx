import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar() {
  const cartCount = useSelector(state => state.cart.items.length);
  
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
