import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCategories } from '../features/payments/ServiceCategories';
import { ServiceProviders } from '../features/payments/ServiceProviders';
import { PaymentForm } from '../features/payments/PaymentForm';
import { usePayments } from '../hooks/usePayments';

const PaymentsPage = () => {
    const {
      step, selectedCategory, selectedProvider,
      handleSelectCategory, handleSelectProvider, handleSuccess,
      goBackToCategories, goBackToProviders
    } = usePayments();

    return (
      <div>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">Corporate Bill Payments</h2>
            <p className="text-muted">
              {step === 1 && "Select a service category to initiate a payment"}
              {step === 2 && "Select your service provider"}
              {step === 3 && "Enter billing details"}
            </p>
          </div>
          <Link to="/app/transfer" className="btn btn-outline-primary fw-500">
            Go to Bank Transfers
          </Link>
        </div>

        {/* The Wizard Logic */}
        {step === 1 && <ServiceCategories onSelectCategory={handleSelectCategory} />}
        
        {step === 2 && (
          <ServiceProviders 
            categoryId={selectedCategory} 
            onSelectProvider={handleSelectProvider} 
            onBack={goBackToCategories} 
          />
        )}
        
        {step === 3 && (
          <PaymentForm 
            provider={selectedProvider} 
            onSuccess={handleSuccess} 
            onBack={goBackToProviders} 
          />
        )}
      </div>
    );
};

export default PaymentsPage;