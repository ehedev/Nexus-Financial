import { useMemo } from 'react';

export const useExpensesData = (transactions) => {
    const chartData = useMemo(() => {
        const expenses = {};

        transactions.forEach(tx => {
            if (tx.type === 'Debit' && tx.status === 'Completed') {
                const name = tx.beneficiary || 'Other';
                expenses[name] = (expenses[name] || 0) + tx.amount;
            }
        });

        const sorted = Object.entries(expenses)
            .map(([name, value]) => ({ name, value }))
            .sort((a,b) => b.value - a.value);

        const top = sorted.slice(0, 4);
        const rest = sorted.slice(4).reduce((sum, item) => sum + item.value, 0);
        if (rest > 0) top.push({ name: 'Other', value: rest });

        return top;
    }, [transactions]);

    return { chartData };
};