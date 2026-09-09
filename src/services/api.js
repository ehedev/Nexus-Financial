// << Simulated API Layer >> //
export const fetchProfileData = async () => {
    try {
        const response = await fetch('/mock/profile.json');
        if (!response.ok) throw new Error('Failed to fetch profile');
        return await response.json();
    } catch (error) {
        console.error("API Error (Profile):", error);
        throw error;
    }
};

export const fetchTransactionData = async () => {
    try {
        const response = await fetch('/mock/transactions.json');
        if (!response.ok) throw new Error('Failed to fetch transactions');
        return await response.json();
    } catch (error) {
        console.error("API Error (Transactions):", error);
        throw error;
    }
};

export const fetchFavoritesData = async () => {
    try {
        const response = await fetch('/mock/favorites.json');
        if (!response.ok) throw new Error('Failed to fetch favorites');
        return await response.json();
    } catch (error) {
        console.error("API Error (Favorites):", error);
        throw error;
    }
};

export const fetchTiersData = async () => {
    try {
        const response = await fetch('/mock/tiers.json');
        if (!response.ok) throw new Error('Failed to fetch tiers');
        return await response.json();
    } catch (error) {
        console.error("API Error (Tiers):", error);
        throw error;
    }
};

export const fetchScheduledPaymentsData = async () => {
    try {
        const response = await fetch('/mock/scheduledPayments.json');
        if (!response.ok) throw new Error('Failed to fetch scheduled payments');
        return await response.json();
    } catch (error) {
        console.error("API Error (Scheduled Payments):", error);
        throw error;
    }
};

export const fetchCategoriesData = async () => {
    try {
        const response = await fetch('/mock/categories.json');
        if (!response.ok) throw new Error('Failed to fetch services');
        return await response.json();
    } catch (error) {
        console.error("API Error (Service Categories):", error);
        throw error;
    }
};

export const fetchProvidersData = async () => {
    try {
        const response = await fetch('/mock/providers.json');
        if (!response.ok) throw new Error('Failed to fetch service providers');
        return await response.json();
    } catch (error) {
        console.error("API Error (Service Providers):", error);
        throw error;
    }
};