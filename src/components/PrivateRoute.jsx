import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStore } from '../store'

const PrivateRoute = () => {
  const [state] = useStore()
  const { isLoggedIn } = state;
  const auth = isLoggedIn || localStorage.getItem('isLoggedIn')
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;