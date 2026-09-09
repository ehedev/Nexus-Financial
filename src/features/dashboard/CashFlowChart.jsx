import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useCashFlowData } from '../../hooks/useCashFlowData';
import { CashFlowTooltip } from '../../components/ui/CashFlowTooltip';

export const CashFlowChart = ({ transactions }) => {
    const { chartData } = useCashFlowData(transactions);

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4A90E2" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#4A90E2" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#D97706" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#D97706" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6c757d', fontSize: 12 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6c757d', fontSize: 12 }} tickFormatter={(val) => `$${val / 1000}k`} />
                    <Tooltip content={<CashFlowTooltip />} />
                    <Area type="monotone" dataKey="income" stroke="#4A90E2" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" />
                    <Area type="monotone" dataKey="expenses" stroke="#D97706" strokeWidth={3} fillOpacity={1} fill="url(#colorExpenses)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};