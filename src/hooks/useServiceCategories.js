import { useState, useEffect } from 'react';
import { fetchCategoriesData } from '../services/api';

export const useServiceCategories = (onSelectCategory) => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCategories = async () => {
            try {
                setIsLoading(true);
                const data = await fetchCategoriesData();
                setCategories(data);
            } catch (err) {
                setError(err.message || 'Failed to load services');
            } finally {
                setIsLoading(false);
            }
        };

        getCategories();
    }, []);

    return { categories };
};