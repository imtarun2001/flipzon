import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500 dark:text-red-400 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate('/')}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline ml-4"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}