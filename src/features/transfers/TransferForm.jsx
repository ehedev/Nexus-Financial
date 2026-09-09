import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { formatCurrency } from '../../utils/formatCurrency';
import { SuccessModal } from '../../components/ui/SuccessModal';
import { useTransferForm } from '../../hooks/useTransferForm';

export const TransferForm = () => {
    const {
        modalState,
        register, handleSubmit, errors,
        onSubmit, closeModal
    } = useTransferForm();

    return (
        <>
            <SuccessModal 
                show={modalState.show}
                onHide={closeModal}
                title="Transfer Successful"
                message={modalState.message}
                buttonText="Back to Dashboard"
            />

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Beneficiary Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="e.g. Global Tech"
                        isInvalid={!!errors.beneficiary}
                        {...register('beneficiary')} 
                    />
                    <Form.Control.Feedback type="invalid">{errors.beneficiary?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter account number"
                        isInvalid={!!errors.accountNumber}
                        {...register('accountNumber')} 
                    />
                    <Form.Control.Feedback type="invalid">{errors.accountNumber?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Transfer Amount ($)</Form.Label>
                    <Form.Control 
                        type="number" 
                        step="0.01"
                        placeholder="0.00"
                        isInvalid={!!errors.amount}
                        {...register('amount')} 
                    />
                    <Form.Control.Feedback type="invalid">{errors.amount?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Description / Reference</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="e.g. Invoice Payment"
                        isInvalid={!!errors.description}
                        {...register('description')} 
                    />
                    <Form.Control.Feedback type="invalid">{errors.description?.message}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 fw-bold py-2">
                    Execute Transfer
                </Button>
            </Form>
        </>
    );
};