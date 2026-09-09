import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAccount } from '../store/AccountContext';
import { formatCurrency } from '../utils/formatCurrency';

export const useTransferForm = () => {
    const { profile, executeTransfer } = useAccount();
    const location = useLocation();
    const [modalState, setModalState] = useState({ show: false, message: '' });

    // Strict Validation Rules
    const schema = useMemo(() => {
        return yup.object().shape({
            beneficiary: yup.string().required('Beneficiary name is required').min(3, 'Name is too short'),
            accountNumber: yup.string().required('Account number is required').matches(/^[0-9]+$/, "Must be only digits").min(8, 'Must be at least 8 digits'),
            amount: yup.number()
                .transform((value) => (isNaN(value) ? undefined : value))
                .required('Amount is required')
                .positive('Amount must be greater than zero')
                .max(profile?.availableBalance || 0, 'Insufficient funds'),
            description: yup.string().required('Please provide a description')
        });
    }, [profile?.availableBalance]);

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched' 
    });

    useEffect(() => {
        if (location.state?.prefillBeneficiary) {
            setValue('beneficiary', location.state.prefillBeneficiary);
            setValue('accountNumber', Math.floor(10000000 + Math.random() * 90000000).toString());
        }
    }, [location.state, setValue]);

    const onSubmit = (data) => {
        executeTransfer(data.amount, data.description, data.beneficiary);
        setModalState({
            show: true,
            message: `You have successfully transferred ${formatCurrency(data.amount, profile?.currency)} to ${data.beneficiary}.`
        });

        reset();
    };

    const closeModal = () => {
        setModalState({ show: false, message: '' });
    };

    return {
        modalState,
        register, handleSubmit, errors,
        onSubmit, closeModal
    };
};