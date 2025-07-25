import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
