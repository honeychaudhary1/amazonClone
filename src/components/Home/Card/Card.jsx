// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function Card({ title, link1, link2, link3, link4, pages }) {
    return (
        <div className="flex flex-col gap-5 bg-white p-5 w-1/4 z-50 w-[23%] relative top-[350px]">
            <div className="h-15">
                <h3>{title}</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 h-4/5">
                <div> 
                    <img src={link1} alt="" className="h-[70px]" />
                    <p className="text-xs w-[100px]">Kitchen and Home Decor</p>
                </div>
                <div>
                    <img src={link2} alt="" className="h-[70px]" />
                    <p className="text-xs w-[100px]">Playstation and PC Gaming</p>
                </div>
                <div>
                    <img src={link3} alt="" className="h-[70px]" />
                    <p className="text-xs w-[100px]">Accessories and Bagpacks</p>
                </div>
                <div>
                    <img src={link4} alt="" className="h-[70px]" />
                    <p className="text-xs w-[100px]">Coffee Machines and Steamers</p>
                </div>
            </div>a
            <div className="w-11/12">
                <a href={pages} className="text-[#007185] no-underline">Explore All</a>
            </div>
        </div>
    );
}

export default Card;
