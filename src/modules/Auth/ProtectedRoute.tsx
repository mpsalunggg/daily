import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';
import { GOOGLE_TOKEN } from '@/constants/localstorage';
import { GoogleToken } from './types';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = (): void => {
    const token = localStorage.getItem(GOOGLE_TOKEN);
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    try {
      const decoded = jwtDecode<GoogleToken>(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        localStorage.removeItem(GOOGLE_TOKEN);
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem(GOOGLE_TOKEN);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;