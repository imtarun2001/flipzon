import React, { useContext, useEffect } from 'react';
import Filterbar from '../components/Filterbar';
import Products from '../components/Products';
import Spinner from '../components/Spinner';
import { AppContext } from '../context/AppContext';

export default function DashboardPage() {
  const { loading, fetchProducts } = useContext(AppContext);

  useEffect(() => {
    fetchProducts();
  }, []); // Added dependency array

  return (
    <div className="min-h-screen">
      <Filterbar />
      <div className="container mx-auto py-8">
        {loading ? <Spinner /> : <Products />}
      </div>
    </div>
  );
}