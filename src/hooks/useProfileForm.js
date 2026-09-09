import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAccount } from '../store/AccountContext';

export const useProfileForm = () => {
    const { profile, updateProfile } = useAccount();
    const [modalState, setModalState] = useState({ show: false, message: '' });

    const schema = yup.object().shape({
        companyName: yup.string().required('Company name is required').min(2, 'Name too short'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        industry: yup.string().required('Please select an industry')
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched'
    });

    // Pre-fill the form when the profile loads
    useEffect(() => {
        if (profile) {
            reset({
                companyName: profile.companyName || '',
                email: profile.email || '',
                industry: profile.industry || 'Technology'
            });
        }
    }, [profile, reset]);

    const onSubmit = (data) => {
        updateProfile(data);
        setModalState({ show: true, message: 'Your corporate profile has been updated successfully.' });
    };

    return {
        profile,
        modalState, setModalState,
        register, handleSubmit, errors,
        onSubmit
    };
};