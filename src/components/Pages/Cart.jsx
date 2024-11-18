import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const Cart = ({ cart, setCart, handleRemove }) => {
  // Ensure cart is loaded from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cart={cart} />
      <div className="h-[200vh] pt-24 flex flex-col items-center justify-start px-4">
        <div className="cart-text font-bold text-5xl text-gray-800 mb-8">
          My Cart
        </div>
        <div className="cart-items w-full max-w-6xl  bg-white rounded-lg shadow-xl p-6">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="cart-item flex justify-between items-center py-4 px-6 bg-gray-50 border-b border-gray-200 hover:bg-gray-100 rounded-lg mb-4">
                <div className="cart-item-image w-1/4 flex-shrink-0">
                  <img
                    src={item.img_link}
                    alt={item.product_name}
                    className="w-full h-auto object-contain rounded-md"
                  />
                </div>
                <div className="cart-item-details w-3/4 pl-6 flex flex-col justify-between">
                  <p className="text-xl font-semibold text-gray-800">{item.product_name}</p>
                  <div className="product-pricing mt-2">
                    <p className="text-lg font-semibold text-green-600">{item.actual_price}</p>
                    <p className="text-sm text-gray-400 line-through">{item.discounted_price}</p>
                  </div>
                 </div>
                 <button className=" bg-red-500   text-white p-3 rounded-lg flex items-center border-[1px] shadow-lg hover:bg-red-600 " onClick={()=>handleRemove(index)}>Remove</button>
              </div>
            ))
          ) : (
            <p className="text-center text-xl text-gray-600">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
