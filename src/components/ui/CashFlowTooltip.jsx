import React from 'react';

export const CashFlowTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border rounded shadow-sm">
            <p className="fw-bold mb-2">{label}</p>
            <p className="mb-1" style={{ color: '#4A90E2' }}>Income: ${payload[0].value.toLocaleString()}</p>
            <p className="mb-0" style={{ color: '#D97706' }}>Expenses: ${payload[1].value.toLocaleString()}</p>
            </div>
        );
    }
    return null;
};