// eslint-disable-next-line no-unused-vars
import React from "react";

const myobj = [
  {
    Title: "Trending",
    category: ["Best Seller", "New Release", "Movers and Shakers"]
  },
  {
    Title: "Digital Content and Device",
    category: ["Echo & Alexa", "Fire TV", "Kindle e-Book"]
  },
  {
    Title: "Shop by Category",
    category: ["Mobile, Computers", "New Release", "Top Rated"]
  },
  {
    Title: "Trending",
    category: ["Best Seller", "New Release", "Top Rated"]
  },
  {
    Title: "Trending",
    category: ["Best Seller", "New Release", "Top Rated"]
  },
];

const Sidebar = ({ isSidebarVisible, setSidebarVisible }) => {
  return (
    <div className="flex ">
      <div className="bg-white h-full w-1/3">
        <div className="flex items-center bg-[#232F3E] text-white h-12 px-8">
          <h3 className="flex-1">
            <i className="fa fa-user mr-2"></i> Hello, Sign in
          </h3>
          <div
            className="absolute left-96 text-white   z-10 bg-black  top-1.5 text-2xl border border-gray-500 p-2 cursor-pointer bg-[rgba(255,255,255,0.14)] rounded-lg shadow-lg"
            onClick={() => setSidebarVisible(false)}
          >
            X
          </div>
        </div>

        <div className="h-[100vh] overflow-y-scroll">
          {myobj.map((item, index) => (
            <ul key={index} className="flex flex-col px-8 py-2 gap-6 border border-gray-200">
              <h3 className="text-lg font-semibold">{item.Title}</h3>
              {item.category.map((cat, i) => (
                <li key={i} className="text-sm">
                  {cat}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="h-screen w-2/3 bg-[rgba(0,0,0,0.52)] backdrop-blur-[0px] border border-[rgba(0,0,0,0.3)] shadow-lg"></div>
    </div>
  );
};

export default Sidebar;
