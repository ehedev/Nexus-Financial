import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchProfileData, fetchTransactionData, fetchFavoritesData } from '../services/api';

export const AccountContext = createContext();

// << Custom hook for components can easily access the store >> //
export const useAccount = () => useContext(AccountContext);

export const AccountProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    // << Fetch initial data on app load >> //
    useEffect(() => {
        const loadData = async () => {
            try {
                // Check if we already have saved data in the browser
                const savedProfile = localStorage.getItem('nexus_profile');
                const savedTransactions = localStorage.getItem('nexus_transactions');
                const savedFavorites = localStorage.getItem('nexus_favorites');

                if (savedProfile && savedTransactions && savedFavorites) {
                    // Load from LocalStorage to prevent reset
                    setProfile(JSON.parse(savedProfile));
                    setTransactions(JSON.parse(savedTransactions));
                    setFavorites(JSON.parse(savedFavorites));
                } else {
                    // If first time loading, fetch from our API/JSON and save it
                    const [profileData, txData, fvData] = await Promise.all([
                        fetchProfileData(),
                        fetchTransactionData(),
                        fetchFavoritesData()
                    ]);
                    setProfile(profileData);
                    setTransactions(txData);
                    setFavorites(fvData);
                    
                    localStorage.setItem('nexus_profile', JSON.stringify(profileData));
                    localStorage.setItem('nexus_transactions', JSON.stringify(txData));
                    localStorage.setItem('nexus_favorites', JSON.stringify(fvData));
                }
            } catch (error) {
                console.error("Failed to load initial data", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    // << Simulate A fund transfer >> //
    const executeTransfer = (amount, description, beneficiary) => {
        const numericAmount = parseFloat(amount);

        // << Deduct from global balance and save to storage >> //
        const updatedProfile = {
            ...profile,
            availableBalance: profile.availableBalance - numericAmount
        };
        setProfile(updatedProfile);
        localStorage.setItem('nexus_profile', JSON.stringify(updatedProfile));

        // << Create a new transaction record >> //
        const newTx = {
            id: `TXN-${Math.floor(10000 + Math.random() * 90000)}`,
            date: new Date().toISOString(),
            description: description,
            beneficiary: beneficiary,
            type: "Debit",
            amount: numericAmount,
            status: "Completed"
        };

        // << Push to the top of the ledger and save to storage >> //
        const updatedTransactions = [newTx, ...transactions];
        setTransactions(updatedTransactions);
        localStorage.setItem('nexus_transactions', JSON.stringify(updatedTransactions));
    };

    // << Update Corporate Profile  >> //
    const updateProfile = (updatedData) => {
        const newProfile = {
            ...profile,
            ...updatedData
        };
        setProfile(newProfile);
        localStorage.setItem('nexus_profile', JSON.stringify(newProfile));
    };

    // << Add New Quick Transfer Favorite >> //
    const addFavorite = (companyName) => {
        const initials = companyName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

        const colors = ['bg-primary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-dark'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        const newFav = {
            id: `f-${Date.now()}`,
            name: companyName,
            initials: initials || 'XX',
            color: randomColor
        };

        const updatedFavorites = [...favorites, newFav];
        setFavorites(updatedFavorites);
        localStorage.setItem('nexus_favorites', JSON.stringify(updatedFavorites));
    }

    return (
        <AccountContext.Provider value={{ profile, transactions, loading, favorites, executeTransfer, updateProfile, addFavorite }}>
            {children}
        </AccountContext.Provider>
    );
};