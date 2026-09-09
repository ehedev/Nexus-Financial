import { useState, useEffect } from 'react';
import { fetchScheduledPaymentsData } from '../services/api';

export const useScheduledPayments = () => {
    const [scheduled, setScheduled] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPayments = async () => {
            try {
                setIsLoading(true);
                const data = await fetchScheduledPaymentsData();
                setScheduled(data);
            } catch (err) {
                setError(err.message || 'Failed to load scheduled payments');
            } finally {
                setIsLoading(false);
            }
        };

        getPayments();
    }, []);

    return { scheduled };
};