import React from 'react';
import { Card } from 'react-bootstrap';
import { TransferForm } from '../features/transfers/TransferForm'; // Import the feature

const TransferPage = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <h2 className="fw-bold mb-4">Transfer Funds</h2>

        <Card className="p-4 border-0 shadow-sm">
          <div className="mb-4 pb-3 border-bottom">
            <h5 className="fw-bold mb-1">Initiate Wire Transfer</h5>
            <span className="text-muted small">Send money to registered beneficiaries globally.</span>
          </div>

          {/* Inject the smart form component here */}
          <TransferForm />
          
        </Card>
      </div>
    </div>
  );
};

export default TransferPage;