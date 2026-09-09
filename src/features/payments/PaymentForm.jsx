import React from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { formatCurrency } from '../../utils/formatCurrency';
import { SuccessModal } from '../../components/ui/SuccessModal';
import { usePaymentForm } from '../../hooks/usePaymentForm';

export const PaymentForm = ({ provider, onBack, onSuccess }) => {
    const { 
        profile, executeTransfer, amount, setAmount,
        billingCode, setBillingCode, error, modalState,
        setModalState, handleSubmit, handleCloseModal, 
    } = usePaymentForm({ provider, onBack, onSuccess });

    return (
        <div className="animation-fade-in">
            {/* Inject the Modal */}
            <SuccessModal 
                show={modalState.show} 
                onHide={handleCloseModal} 
                title="Payment Successful"
                message={modalState.message}
                buttonText="Done"
            />

            <Button variant="link" className="text-muted p-0 mb-3 text-decoration-none" onClick={onBack}>
                &larr; Back to Providers
            </Button>

            <Card className="border-0 shadow-sm p-4 mx-auto" style={{ maxWidth: '500px' }}>
                <div className="text-center mb-4">
                    <h4 className="fw-bold text-primary">{provider.name}</h4>
                    <span className="text-muted">Pay your {provider.type.toLowerCase()} bill</span>
                </div>

                {/* We keep this Alert just for form errors (like insufficient funds) */}
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Billing Code / Phone Number</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your service number"
                            value={billingCode}
                            onChange={(e) => setBillingCode(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Amount to Pay ($)</Form.Label>
                        <Form.Control 
                            type="number" 
                            step="0.01"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            Available Balance: {formatCurrency(profile?.availableBalance || 0)}
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 fw-bold py-2">
                        Confirm Payment
                    </Button>
                </Form>
            </Card>
        </div>
    );
};