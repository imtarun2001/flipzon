import React, { useContext } from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { AppContext } from '../context/AppContext';

export default function WishListProduct({ product }) {
    const {
      cartProducts,
      addToCartHandler,
      removeFromWishListHandler
    } = useContext(AppContext);
  
    const isInCart = cartProducts.find((p) => p.id === product.id);

  return (
    <div className="flex items-center gap-6 p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 transform transition-all duration-300 hover:scale-105">
      <img
        src={product.image}
        alt="product image here"
        className="w-24 h-24 object-contain rounded"
      />
      <div className="flex-grow space-y-2">
        <div className="text-lg font-semibold text-white">{product.title}</div>
        <div className="text-md text-gray-700 dark:text-gray-300">💲{product.price}</div>
        <div className="text-sm text-yellow-500">{product.rating.rate} <span className="text-gray-500 dark:text-gray-400">🌟</span></div>
        <div className="text-sm italic text-gray-600">{product.rating.count} units left</div>
        <div className="flex items-center space-x-2">
          <button
            className="bg-fuchsia-300 hover:bg-fuchsia-400 text-black hover:text-white font-semibold py-2 px-3 rounded focus:outline-none transition-colors duration-200"
            onClick={() => removeFromWishListHandler(product)}
          >
            <MdDeleteSweep size={20} />
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 rounded focus:outline-none transition-colors duration-200 flex items-center gap-1"
            onClick={() => addToCartHandler(product)}
          >
            {
              isInCart ? <span className='flex flex-row'>Remove from Cart <IoMdArrowRoundForward size={20} /></span> : <span className='flex flex-row'>Move to Cart <IoMdArrowRoundForward size={20} /></span>
            }
          </button>
        </div>
      </div>
    </div>
  );
}