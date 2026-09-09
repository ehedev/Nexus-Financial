import { useState } from 'react';
import { useAccount } from '../store/AccountContext';
import { formatCurrency } from '../utils/formatCurrency';

export const usePaymentForm = ({ provider, onBack, onSuccess }) => {
    const { profile, executeTransfer } = useAccount();
    const [amount, setAmount] = useState('');
    const [billingCode, setBillingCode] = useState('');
    const [error, setError] = useState('');
    const [modalState, setModalState] = useState({ show: false, message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const numericAmount = parseFloat(amount);
        if (!billingCode) return setError('Billing code/Number is required.');
        if (!amount || numericAmount <= 0) return setError('Please enter a valid amount.');
        if (numericAmount > profile.availableBalance) return setError('Insufficient balance.');

        executeTransfer(numericAmount, `Bill Payment: ${provider?.name} (${billingCode})`, provider?.name);
        
        setModalState({
            show: true,
            message: `You have successfully paid ${formatCurrency(numericAmount, profile?.currency)} to ${provider?.name}.`
        });
    };

    const handleCloseModal = () => {
        setModalState({ show: false, message: '' });
        onSuccess?.();
    };

    return {
        profile,
        executeTransfer,
        amount,
        setAmount,
        billingCode,
        setBillingCode,
        error,
        modalState,
        setModalState,
        handleSubmit,
        handleCloseModal,
    };
}