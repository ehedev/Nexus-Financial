import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useExpensesData } from '../../hooks/useExpensesData';
import { BreakdownPieTooltip } from '../../components/ui/BreakdownPieTooltip';

export const ExpensePieChart = ({ transactions }) => {
    const { chartData } = useExpensesData(transactions);

    const COLORS = ['#D97706', '#4A90E2', '#10B981', '#6c757d', '#8B5CF6'];

    return (
        <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={chartData}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<BreakdownPieTooltip />} />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '14px' }} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};