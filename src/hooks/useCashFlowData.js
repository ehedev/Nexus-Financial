import { useMemo } from 'react';

export const useCashFlowData = (transactions) => {
    const chartData = useMemo(() => {
        const months = [];
        // Generate the last 6 months structure
        for (let i = 5; i >= 0; i--) {
            const d = new Date();
            d.setMonth(d.getMonth() - i);
            months.push({ 
                month: d.toLocaleString('default', { month: 'short' }), 
                income: 0, 
                expenses: 0, 
                monthNum: d.getMonth(), 
                year: d.getFullYear()
            });
        }

        // Populate with real transaction data
        transactions?.forEach(tx => {
            if (tx.status !== 'Completed') return; // Only count successful transfers
            
            const txDate = new Date(tx.date);
            const targetMonth = months.find(m => m.monthNum === txDate.getMonth() && m.year === txDate.getFullYear());
            
            if (targetMonth) {
                if (tx.type === 'Credit') targetMonth.income += tx.amount;
                if (tx.type === 'Debit') targetMonth.expenses += tx.amount;
            }
        });

        return months;
    }, [transactions]);

    return { chartData };
};