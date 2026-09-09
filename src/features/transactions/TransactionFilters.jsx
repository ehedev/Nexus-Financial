import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

export const TransactionFilters = ({ searchTerm, setSearchTerm, filterType, setFilterType }) => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <InputGroup style={{ maxWidth: '400px' }}>
                <InputGroup.Text className="bg-light border-end-0">🔍</InputGroup.Text>
                <Form.Control 
                type="text"
                placeholder="Search by ID or Description..."
                className="bg-light border-start-0 ps-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </InputGroup>

            <Form.Select 
                style={{ maxWidth: '200px' }} 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-light"
            >
                <option value="All">All Transactions</option>
                <option value="Credit">Credits (Incoming)</option>
                <option value="Debit">Debits (Outgoing)</option>
            </Form.Select>
        </div>
    );
};