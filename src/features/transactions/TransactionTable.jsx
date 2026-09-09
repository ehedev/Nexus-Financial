import React from 'react';
import { Table, Badge } from 'react-bootstrap';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';

export const TransactionTable = ({ transactions }) => {
    return (
        <div className="table-responsive">
            <Table hover className="align-middle">
                <thead className="table-light text-muted">
                <tr>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Beneficiary</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th className="text-end">Amount</th>
                    <th className="text-center">Status</th>
                </tr>
                </thead>
                <tbody>
                {transactions.length > 0 ? (
                    transactions.map((trx) => (
                    <tr key={trx.id}>
                        <td className="fw-500">{trx.id}</td>
                        <td>{formatDate(trx.date)}</td>
                        <td>{trx.beneficiary}</td>
                        <td>{trx.description}</td>
                        <td>
                            <Badge bg={trx.type === 'Credit' ? 'success' : 'secondary'} className="bg-opacity-75">
                                {trx.type}
                            </Badge>
                        </td>
                        <td className={`text-end fw-bold ${trx.type === 'Credit' ? 'text-success' : ''}`}>
                            {trx.type === 'Credit' ? '+' : '-'}{formatCurrency(trx.amount)}
                        </td>
                        <td className="text-center">
                            <Badge 
                                bg={
                                trx.status === 'Completed' ? 'success' : 
                                trx.status === 'Pending' ? 'warning' : 'danger'
                                }
                            >
                                {trx.status}
                            </Badge>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" className="text-center py-5 text-muted">
                            No transactions found matching your criteria.
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
};