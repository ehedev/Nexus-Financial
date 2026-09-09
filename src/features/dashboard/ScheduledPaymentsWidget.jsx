import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { formatCurrency } from '../../utils/formatCurrency';
import { useScheduledPayments } from '../../hooks/useScheduledPayments';

export const ScheduledPaymentsWidget = () => {
    const { scheduled } = useScheduledPayments();

    return (
        <ListGroup variant="flush">
            {scheduled.map(item => (
                <ListGroup.Item key={item.id} className='px-0 py-3 bg-transparent border-bottom'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-3'>
                            <div className='bg-light p-2 rounded text-primary'>
                                <FiCalendar size={20} />
                            </div>
                            <div>
                                <p className='fw-bold mb-0 text-truncate' style={{ maxWidth: '150px' }}>
                                    {item.payee}
                                </p>
                                <small className='text-muted d-flex align-items-center gap-1'>
                                    <FiClock size={12} />Due in {item.daysLeft} days
                                </small>
                            </div>
                        </div>
                        <div className='text-end'>
                            <p className='fw-bold mb-0 text-dark'>
                                {formatCurrency(item.amount)}
                            </p>
                            <Badge bg="light" text="secondary" className='border fw-500 rounded-pill' style={{ fontSize: '0.65rem' }}>
                                {item.type}
                            </Badge>
                        </div>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}