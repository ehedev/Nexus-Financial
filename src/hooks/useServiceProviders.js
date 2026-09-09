import { useState, useEffect } from 'react';
import { fetchProvidersData } from '../services/api';

export const useServiceProviders = (categoryId) => {
    const [providersMap, setProvidersMap] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProviders = async () => {
            try {
                setIsLoading(true);
                const data = await fetchProvidersData();
                setProvidersMap(data[0] || {});
            } catch (err) {
                setError(err.message || 'Failed to load services providers');
            } finally {
                setIsLoading(false);
            }
        };

        getProviders();
    }, []);

    const providers = providersMap ? (providersMap[categoryId] || []) : [];

    return { providers };
};