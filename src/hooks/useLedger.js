import { useState, useMemo } from 'react';
import { useAccount } from '../store/AccountContext';

export const useLedger = () => {
    const { transactions } = useAccount();
        
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');

    const filteredTransactions = useMemo(() => {
        return transactions.filter((trx) => {
        const matchesSearch = 
            trx.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
            trx.description.toLowerCase().includes(searchTerm.toLowerCase());
            (trx.beneficiary && trx.beneficiary.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesType = filterType === 'All' || trx.type === filterType;
        
        return matchesSearch && matchesType;
        });
    }, [transactions, searchTerm, filterType]);

    return {
        transactions,
        searchTerm, setSearchTerm,
        filterType, setFilterType,
        filteredTransactions
    };
};