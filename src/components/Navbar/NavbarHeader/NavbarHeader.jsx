    import cartimage from "../../../assets/header/cartimage.png"
import logo from '../../../assets/header/logo.svg';
import india from '../../../assets/header/india.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Cart from "../../Pages/Cart";
import { useState } from "react";

const NavbarHeader = ({cart}) => {
   const navigate = useNavigate()
    const  [input, setInput] = useState("")

   const  cartCount = cart.length;
   const handleInputChange = ()=>{
    
   }
   console.log(cart.length)

   const handleSubmit=(e)=>{
    e.preventDefault()
    navigate("/fresh")
   }
    return (
        <nav className="bg-[#131921] h-[53px] flex items-center justify-around">
            <div className="flex gap-5">
                <div className="p-1 border border-transparent cursor-pointer flex items-center hover:border-white">
                   <Link to='/'> <img src={logo} alt="Logo" className="h-[31px]" /></Link>
                </div>
                <div className="text-white border border-transparent p-1 cursor-pointer hover:border-white">
                    <p className="text-[11px] ml-3 text-[#d7d2ce]">Delivering to New Delhi 11020</p>
                    <h4 className="text-[15px]"><i className="fa fa-map-marker"></i> Update location</h4>
                </div>
            </div>

            <div className="flex">
                <div className="flex">
                <form onSubmit={handleSubmit}>
                    <select className="w-[60px] h-full bg-[#E6E6E6] rounded-l-md border-none outline-none">
                        <option value="">All</option>
                        <option value="">All Categories</option>
                        <option value="">Alexa Skill</option>
                        <option value="">Amazon Devices</option>
                        <option value="">Amazon Fashion</option>
                        <option value="">Amazon Fresh</option>
                        <option value="">Amazon Fresh Meat</option>
                        <option value="">Appliances</option>
                    </select>
                    <input
                       onChange={handleInputChange}
                        type="text"
                        placeholder="Search Amazon.in"
                        className="w-[450px] p-2 text-left h-full border-none outline-none"
                    />
                    <button className="h-full p-2 bg-[#FEBD69] rounded-r-md cursor-pointer hover:bg-[#ce9a56]">
                        <i className="fa fa-search"></i>
                    </button>
                    </form>
                </div>
            </div>

            <div className="flex items-center text-white gap-2">
                <div className="flex items-center justify-around cursor-pointer border border-transparent p-2 hover:border-white">
                    <img src={india} alt="India Flag" className="h-5" />
                    <select className="border-none outline-none bg-transparent text-white">
                        <option value="">EN</option>
                    </select>
                </div>

                <div className="border border-transparent p-1 cursor-pointer hover:border-white">
                    <Link to="/SignIn" className="text-white no-underline">
                        <h6 className="ml-1 text-[11px]">Hello, Sign in</h6>
                    </Link>
                    <select className="border-none outline-none bg-transparent text-white">
                        <option value="">Account & List</option>
                    </select>
                </div>

                <div className="border text-[13px] border-transparent p-1 cursor-pointer hover:border-white">
                    <h6>Returns</h6>
                    <h5 className='font-bold'>& Orders</h5>
                </div>

             <Link to='/Cart'>
             <div className="h-[44px] flex justify-center items-center border border-transparent p-1 cursor-pointer relative hover:border-white">
                    <h3 className="absolute top-0 left-6 text-[#E97F06]">{cartCount}</h3>
                    <img src={cartimage} className='h-10' alt="Cart" />
                    <h4 className="mt-5 text-[13px]">Cart</h4>
                </div>
             </Link>  
            </div>
        </nav>
    );
};

export default NavbarHeader;
