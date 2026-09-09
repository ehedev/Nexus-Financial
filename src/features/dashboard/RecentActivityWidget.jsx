import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';

export const RecentActivityWidget = ({ transactions }) => {
    const recentTx = transactions.slice(0, 5);

    return (
        <ListGroup variant='flush'>
            {recentTx.map(tx => (
                <ListGroup.Item key={tx.id} className='px-0 py-3 bg-transparent border-bottom'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <p className='fw-bold mb-0 text-truncate' style={{ maxWidth: '200px' }}>
                                {tx.beneficiary || tx.description}
                            </p>
                            <small className='text-muted'>{formatDate(tx.date)}</small>
                        </div>
                        <div className='text-end'>
                            <p className={`fw-bold mb-0 ${tx.type === 'Credit' ? 'text-success' : 'text-danger'}`}>
                                {tx.type === 'Credit' ? '+' : '-'}{formatCurrency(tx.amount)}
                            </p>
                            <Badge
                                bg={tx.status === 'Completed' ? 'success' : tx.status === 'Pending' ? 'warning' : 'danger'}
                                className='bg-opacity-75'
                                style={{ fontSize: '0.65rem' }}
                            >
                                {tx.status}
                            </Badge>
                        </div>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};