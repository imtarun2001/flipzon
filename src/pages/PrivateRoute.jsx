import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useContext(AppContext);

  return isLoggedIn ? children : <Navigate to="/login" />;
}
