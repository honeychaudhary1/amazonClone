// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const images = [
  "https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
];

const Crousel = () => {
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div className="absolute flex justify-center mt-[50px] w-full h-screen overflow-hidden">
      <div 
        className="absolute left-0 cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-100" 
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[270px] w-[50px]" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      
      <div className="flex w-full items-center justify-center">
        {images.map((item, index) => (
          current === index && (
            <img 
              key={index} 
              src={item} 
              alt="carousel slide" 
              className="w-full h-[90vh] transition duration-200 ease-in-out" 
            />
          )
        ))}
      </div>
      
      <div 
        className="absolute right-0 cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-100" 
        onClick={prevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[270px] w-[50px]" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  );
};

export default Crousel;
