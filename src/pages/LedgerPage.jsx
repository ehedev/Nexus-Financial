import React from 'react';
import { Card } from 'react-bootstrap';
import { useLedger } from '../hooks/useLedger';

// Import Feature components
import { TransactionFilters } from '../features/transactions/TransactionFilters';
import { TransactionTable } from '../features/transactions/TransactionTable';
import { ExportData } from '../features/transactions/ExportData';

const LedgerPage = () => {
    const {
        transactions,
        searchTerm, setSearchTerm,
        filterType, setFilterType,
        filteredTransactions
    } = useLedger();

    return (
        <div className="row">
            <div className="col-12">
                <div className='d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-md-0'>
                    <div>
                        <h2 className="fw-bold mb-1">Transaction Ledger</h2>
                        <p className='text-muted'>View, filter, and export your corporate transaction history.</p>
                    </div>
                    <ExportData data={filteredTransactions} />
                </div>

                <Card className="border-0 shadow-sm p-4">
                
                {/* Inject the Filters and pass down the state */}
                <TransactionFilters 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm}
                    filterType={filterType}
                    setFilterType={setFilterType}
                />

                {/* Inject the Table and pass down the filtered data */}
                <TransactionTable transactions={filteredTransactions} />
                
                </Card>
            </div>
        </div>
    );
};

export default LedgerPage;