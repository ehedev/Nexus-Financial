import React from 'react';

export const BreakdownPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
                <div className='bg-white p-2 border rounded shadow-sm small'>
                <span className='fw-bold'>{payload[0].name}: </span>
                ${payload[0].value.toLocaleString()}
            </div>
        );
    }
    return null;
};