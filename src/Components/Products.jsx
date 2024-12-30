import { useDispatch } from 'react-redux';
import { addToCart } from './store';
import { useState,useEffect } from 'react';
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map(product => (
            <div key={`${product.id}-${Math.random()}`} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", width: "200px" }}>
              <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => dispatch(addToCart({ ...product, uniqueId: Date.now() }))}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
