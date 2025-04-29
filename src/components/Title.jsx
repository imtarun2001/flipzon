import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FiLogIn } from 'react-icons/fi';
import { FaUserPlus } from 'react-icons/fa';
import { BsCart4 } from 'react-icons/bs';
import { MdFavorite } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export default function Title() {
  const { cartProducts, wishListProducts, isLoggedIn, gotoDashboardNLogOut } =
    useContext(AppContext);

  return (
    <nav className="w-full bg-blue-700 text-white shadow-md py-3">
  <div className="container mx-auto px-4 sm:px-7 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
    

    {/* Left Side: Cart and Wishlist */}
    <div className="font-bold flex justify-center items-center space-x-10 order-2 sm:order-none">
      <NavLink to="/cart" className="relative flex items-center text-lg hover:text-blue-200 transition">
        <BsCart4 size={20} />
        <span className="ml-2 font-semibold">Cart</span>
        {cartProducts.length > 0 && (
          <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">{cartProducts.length}</span>
        )}
      </NavLink>
      <NavLink to="/wishlist" className="relative flex items-center text-lg hover:text-blue-200 transition">
        <MdFavorite size={20} />
        <span className="ml-2 font-semibold">Wishlist</span>
        {wishListProducts.length > 0 && (
          <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">{wishListProducts.length}</span>
        )}
      </NavLink>
    </div>


    {/* Center: Logo/Title — On mobile, appears first */}
    <NavLink
      to="/"
      className="order-1 sm:order-none text-2xl font-serif font-bold text-yellow-300 hover:text-yellow-400 transition"
    >
      FlipZon
    </NavLink>



    {/* Right Side: Login/Logout and Signup */}
    <div className="font-bold flex justify-end items-center space-x-10 order-3 sm:order-none">
      {isLoggedIn ? (
        <button
          onClick={gotoDashboardNLogOut}
          className="flex items-center text-lg hover:text-blue-200 transition focus:outline-none"
        >
          <FiLogIn size={20} className="mr-1" />
          <span>Logout</span>
        </button>
      ) : (
        <div className='flex items-center space-x-10'>
          <NavLink
            to="/login"
            className="flex items-center text-lg hover:text-blue-200 transition focus:outline-none"
          >
            <FiLogIn size={20} className="mr-1" />
            <span>Login</span>
          </NavLink>
          <NavLink
            to="/signup"
            className="flex items-center text-lg hover:text-blue-200 transition focus:outline-none"
          >
            <FaUserPlus size={20} className="mr-1" />
            <span>Signup</span>
          </NavLink>
        </div>
      )}
    </div>

  </div>
</nav>
  );
}