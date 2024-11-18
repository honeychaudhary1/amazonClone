  /* eslint-disable react/prop-types */
  const Product = ({ data, addToCart}) => {

    return (
      <div className="container  items-center bg-white w-[100%] flex flex-wrap justify-center gap-2 pt-24">
        {data.map((item, index) => (
          <div
            className="product w-[280px] flex bg-white flex-col justify-between items-center border border-gray-200 rounded-lg shadow-lg p-5"
            key={index}
          >
            {/* Product Image */}
            <div className="product-image h-40 w-full mb-4">
              <img
                src={item.img_link}
                className="h-full w-full object-contain"
                alt={item.product_name}  
              />
            </div>

            {/* Product Content */}
            <div className="product-content flex flex-col gap-3 justify-between text-center">
              <div className="product-title text-lg h-20 overflow-ellipsis overflow-hidden font-semibold text-gray-800">
                <p>{item.product_name}</p>
              </div>
              <div className="product-rating text-yellow-500 font-medium">
                {item.rating} ★ ★ ★ ★
              </div>
              <div className="product-price flex items-center justify-center gap-3">
                <h3 className="text-green-600 font-bold">{item.actual_price}</h3>
                <s className="text-gray-500">{item.discounted_price}</s>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="button mt-5" onClick={()=>addToCart(item)}>
              <button className="addtocart bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-10 rounded-lg transition">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default Product;
