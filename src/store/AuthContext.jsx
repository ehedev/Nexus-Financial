import React, { createContext, useState, useContext, useEffect } from 'react';

// << Create the Context >> //
export const AuthContext = createContext();

// << Custom hook to easily grab auth data anywhere in our app >> //
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, seIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);

    // When the app first loads, check if we already have a token saved
    useEffect(() => {
        const savedToken = localStorage.getItem('nexus_auth_token');
        if (savedToken) {
            setToken(savedToken);
            seIsAuthenticated(true);
        }
    }, []);

    // Simulate an API Login Request
    const login = async (email, password) => {
        if (email && password) {
            const fakeJwt = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.simulated_token_${Date.now()}`;

            localStorage.setItem('nexus_auth_token', fakeJwt);
            setToken(fakeJwt);
            seIsAuthenticated(true);
            return true; // Success
        }
        return false; // Failed
    };

    const logout = () => {
        localStorage.removeItem('nexus_auth_token');
        setToken(null);
        seIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}