import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  const { signed, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Loading</div>;
  }

  if (!signed) {
    return <Navigate to="/login" />;
  }

  return children;
}
