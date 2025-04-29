import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function Product({ product }) {
  const {
    cartProducts,
    addToCartHandler,
    wishListProducts,
    addToWishListHandler,
    dark,
  } = useContext(AppContext);

  const isInCart = cartProducts.find((p) => p.id === product.id);
  const isInWishlist = wishListProducts.find((p) => p.id === product.id);

  return (
    <div
      className={`group relative flex flex-col items-center justify-between p-6 rounded-lg shadow-md transition hover:scale-105 duration-1000 ${
        dark
          ? 'bg-gray-800 text-gray-100 hover:bg-gray-700'
          : 'bg-white text-gray-800 hover:bg-gray-100'
      }`}
    >
      {/* Image */}
      <div className="relative w-48 h-48 mb-4 flex items-center justify-center">
        <img
          src={product.image}
          alt="product"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Title */}
      <div className="text-center mb-3">
        <h3 className="text-lg font-semibold line-clamp-2">{product.title}</h3>
      </div>

      {/* Price & Rating */}
      <div className="flex items-center justify-between w-full mb-4">
        <span className="text-xl font-bold text-crimson-500 dark:text-crimson-400">
          💲{product.price}
        </span>
        <span className="text-sm text-yellow-600 font-bold">
          {product.rating.rate} <span>🌟</span>
        </span>
      </div>

        <div className="font-semibold font-mono py-2">
          {
            product.description.substr(0,100) + "..."
          }
        </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-10 w-full">
        <button
          onClick={() => addToCartHandler(product)}
          className={`flex items-center justify-center px-4 py-2 text-sm font-semibold cursor-pointer rounded-md focus:outline-none transition-colors duration-200 ${
            isInCart
              ? 'bg-sky-500 text-white hover:bg-sky-600'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isInCart ? <MdOutlineRemoveShoppingCart size={20} /> : <MdAddShoppingCart size={20} />}
        </button>
        <button
          onClick={() => addToWishListHandler(product)}
          className={`flex items-center justify-center px-4 py-2 text-sm font-semibold cursor-pointer rounded-md focus:outline-none transition-colors duration-200 ${
            isInWishlist
              ? 'bg-gray-200 text-pink-500 hover:bg-gray-600'
              : 'bg-gray-200 text-black hover:bg-gray-600 hover:text-white'
          }`}
        >
          {isInWishlist ? <AiFillHeart size={20} className='cursor-pointer'/> : <AiOutlineHeart size={20} className='cursor-pointer'/>}
        </button>
      </div>


      {/* Stock Indicator */}
      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
        {product.rating.count} left
      </div>
    </div>
  );
}