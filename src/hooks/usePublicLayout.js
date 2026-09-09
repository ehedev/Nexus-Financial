import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

export const usePublicLayout = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/');
    };
    const [expanded, setExpanded] = useState(false);

    return {
        isAuthenticated,
        handleLogout,
        expanded,
        setExpanded,
    };
};