// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const obj = [
  { name: "Fresh", link: "/fresh" },
  { name: "Mx Player" },
  { name: "Sell" },
  { name: "Best Seller" },
  { name: "Today's Deals" },
  { name: "Mobiles" },
  { name: "Electronics" },
  { name: "Home & Kitchen" },
  { name: "Customer Service" },
  { name: "Prime" },
];

// eslint-disable-next-line react/prop-types
const NavbarFilter = ({setSidebarVisible }) => {
  return (
    <div className="h-full bg-[#232F3E]">
      <div className="flex items-center justify-between">
        <ul className="flex gap-5 list-none text-white items-center h-[40px] w-[70%] cursor-pointer text-[12px] justify-center">
          <li  onClick={() => setSidebarVisible(true)}
            className="border border-transparent h-full flex  gap-1 items-center p-1 hover:border-white">
            <i className="fa fa-bars"></i> <strong>All</strong>
          </li>

          {obj.map((item, index) => (
            <li
              key={index}
              className="border border-transparent h-full flex items-center p-1 hover:border-white"
            >
              <Link className="text-white no-underline" to={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <img
          src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Vettaiyan/400x39-SWM-NP._CB543047660_.jpg"
          alt="Amazon Banner"
          className="w-[25%]"
        />
      </div>
    </div>
  );
};

export default NavbarFilter;
