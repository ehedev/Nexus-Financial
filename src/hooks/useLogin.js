import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

export const useLogin = () => {
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [authError, setAuthError] = useState('');

    // Strict validation schema
    const schema = yup.object().shape({
        email: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/app/dashboard', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    const onSubmit = async (data) => {
        setAuthError('');
        // Simulate network delay for realism
        const success = await login(data.email, data.password);
        
        if (!success) {
            setAuthError('Invalid credentials. Please try again.');
        }
    };

    return {
        authError,
        register, handleSubmit, errors,
        onSubmit
    };
}