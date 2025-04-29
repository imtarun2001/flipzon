import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import CartProduct from '../components/CartProduct';
import { IoMdLock } from 'react-icons/io';
import { BsCart4 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function CartPage() {
  const { cartProducts, price } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8 flex items-center">
          <BsCart4 className="mr-2" /> My Cart <span className="text-yellow-500 ml-1">✨</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product list */}
          <div className="lg:col-span-2">
            {cartProducts.length > 0 ? (
              <div className="space-y-4">
                {cartProducts.map((product) => (
                  <CartProduct key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-white text-center flex flex-col justify-center items-center gap-2.5 py-30">
                <div className='inline-block animate-bounce'>Your Cart is empty!!😢</div>
                <div>
                  <NavLink to="/">
                    <button className='text-lg cursor-pointer font-semibold bg-blue-600 hover:bg-blue-500 py-1 px-5 rounded-lg'>
                      Go to Home
                    </button>
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          {/* Checkout Panel */}
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 sticky top-20">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Order Summary
            </h2>
            <div className="border-b border-gray-200 dark:border-gray-700 py-4">
              <p className="text-gray-600 dark:text-gray-400">
                Total <span className="font-semibold text-blue-500">{cartProducts.length}</span> items
              </p>
            </div>
            <div className="py-4">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Total Amount: <span className="text-fuchsia-600 dark:text-fuchsia-400">💲{price.toFixed(2)}</span>
              </p>
            </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md focus:outline-none transition-colors duration-200"
              >
                <IoMdLock className="mr-2" />
                Check out
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}