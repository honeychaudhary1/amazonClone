import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Home/Home.jsx';
import Fresh from './components/Pages/Fresh.jsx';
import Signin from './components/Signin/Signin.jsx';
import Cart from './components/Pages/Cart.jsx';
import toast, { Toaster } from "react-hot-toast";
const App = () => {
  // Initialize cart state from localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const handleRemove = (index) => {
    const newCart = cart.filter((_, ind) => ind !== index)
    setCart(newCart)
    toast.success("Item Removed Successfully")
  };

  // Sync cart with localStorage on every update
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className='App'>
          <Navbar cart={cart} />
          <Home />
        </div>
      ),
    },
    {
      path: "/SignIn",
      element: <Signin />,
    },
    {
      path: "/fresh",
      element: <Fresh cart={cart} setCart={setCart} />,
    },
    {
      path: "/Cart",
      element: <Cart cart={cart} handleRemove={handleRemove} setCart={setCart} />,
    },
  ]);

  return (
  
  <>
  <RouterProvider router={router} />;
  <Toaster />
  </>
)
};

export default App;
