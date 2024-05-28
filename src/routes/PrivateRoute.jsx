import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import Loading from '../components/Loading/Loading';

export default function PrivateRoute({ children }) {
  const { signed, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }

  if (!signed) {
    return <Navigate to="/login" />;
  }

  return children;
}