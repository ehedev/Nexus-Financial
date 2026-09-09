import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import { useAccount } from '../store/AccountContext';

export const useMainLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth();
    const { profile } = useAccount();
    const handleSignOut = () => {
        logout();
        navigate('/login');
    }
    const [expanded, setExpanded] = useState(false);

    return {
        location,
        profile,
        handleSignOut,
        expanded,
        setExpanded,
    };
};