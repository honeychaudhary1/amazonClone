import Navbar from "../Navbar/Navbar.jsx";
import Product from "../Home/Products/Product.jsx";
import sampleData from '../Home/Products/constants.js';
import {toast } from 'react-hot-toast';


const Fresh = ({ cart, setCart }) => {
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success("product added to cart")
  };



  return (
    <div className="fresh">
      <Navbar cart={cart} />
      <div>
        {/* Pass cart and addToCart to the Product component */}
        <Product cart={cart} addToCart={addToCart} data={sampleData} />
      </div>
    </div>
  );
};

export default Fresh;
