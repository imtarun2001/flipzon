import React, { useContext } from 'react';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { AppContext } from '../context/AppContext';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUpPage() {
  const { signUpFormData, signUpChangeHandler, signUpSubmitHandler } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center py-12">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Sign Up
        </h2>
        <form onSubmit={signUpSubmitHandler} className="space-y-4">
          <div>
            <label htmlFor="semail" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                <BiSolidUserRectangle />
              </div>
              <input
                type="email"
                id="semail"
                name="semail"
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700"
                placeholder="Enter your email"
                onChange={signUpChangeHandler}
                value={signUpFormData.semail}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="spassword" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                <RiLockPasswordFill />
              </div>
              <input
                type="password"
                id="spassword"
                name="spassword"
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700"
                placeholder="Create password"
                onChange={signUpChangeHandler}
                value={signUpFormData.spassword}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="scpassword" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                <RiLockPasswordFill />
              </div>
              <input
                type="password"
                id="scpassword"
                name="scpassword"
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700"
                placeholder="Confirm your password"
                onChange={signUpChangeHandler}
                value={signUpFormData.scpassword}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Or sign up with
        </div>
        <button
          onClick={() => navigate('/loginwithgoogle')}
          className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2"
        >
          <FcGoogle className="mr-2" />
          Google
        </button>
        <div className="mt-6 text-center text-gray-600 dark:text-gray-400">
          Already have an account?
          <Link to="/login" className="text-blue-500 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 ml-1">
            Log In
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link to="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
            Go back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}