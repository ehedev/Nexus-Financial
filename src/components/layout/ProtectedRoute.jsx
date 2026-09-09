import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../store/AuthContext';

export const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        console.log("Dashboard loaded");
    }, []);

    // If there is no token, redirect to the public login page immediately
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // If authenticated, render the request secure page (via Outlet)
    return <Outlet />;
};