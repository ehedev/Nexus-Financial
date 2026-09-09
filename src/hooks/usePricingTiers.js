import { useState, useEffect } from 'react';
import { fetchTiersData } from '../services/api';

export const usePricingTiers = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const [tiers, setTiers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPricingTiers = async () => {
            try {
                const data = await fetchTiersData();
                setTiers(data);
            } catch (err) {
                setError('Unable to load pricing data at this time.');
            } finally {
                setIsLoading(false);
            }
        };

        loadPricingTiers();
    }, []);

    return {
        isAnnual,
        setIsAnnual,
        tiers,
        isLoading, error,
    };
};