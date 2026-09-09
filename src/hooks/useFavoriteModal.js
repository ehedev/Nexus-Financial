import { useState } from 'react';
import { useAccount } from '../store/AccountContext';

export const useFavoriteModal = (onHide) => {
    const { addFavorite } = useAccount();
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        addFavorite(name);
        setName('');
        onHide();
    };

    return {
        name,
        setName,
        handleSubmit,
    };
};