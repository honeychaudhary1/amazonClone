// eslint-disable-next-line no-unused-vars
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import NavbarHeader from "./NavbarHeader/NavbarHeader";
import NavbarFilter from "./NavbarFilter/NavbarFilter";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = ({cart}) => {
  console.log(cart)
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div className="relative">
      <div className="fixed top-0 z-[5000] w-full">
        <NavbarHeader cart={cart} />
        <NavbarFilter
          isSidebarVisible={isSidebarVisible}
          setSidebarVisible={setSidebarVisible}/>
      </div>

      <div className={`absolute top-0 z-[6000] w-full ${isSidebarVisible ? "block" : "hidden"}`}>
        <Sidebar isSidebarVisible={isSidebarVisible} setSidebarVisible={setSidebarVisible} />
      </div>
    </div>
  );
};

export default Navbar;
