import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FiCopy } from 'react-icons/fi';
import { SuccessModal } from '../../components/ui/SuccessModal';
import { useProfileForm } from '../../hooks/useProfileForm';

export const ProfileForm = () => {
    const {
        profile, modalState, setModalState,
        errors, register, handleSubmit, onSubmit
    } = useProfileForm();

    return (
        <>
            <SuccessModal 
                show={modalState.show} 
                onHide={() => setModalState({ show: false, message: '' })} 
                title="Profile Updated"
                message={modalState.message}
                buttonText="Close"
            />

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Corporate Entity Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        isInvalid={!!errors.companyName}
                        {...register('companyName')} 
                    />
                    <Form.Control.Feedback type="invalid">{errors.companyName?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Primary Contact Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        isInvalid={!!errors.email}
                        {...register('email')} 
                    />
                    <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Industry Sector</Form.Label>
                    <Form.Select isInvalid={!!errors.industry} {...register('industry')}>
                        <option value="Technology">Technology & Software</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Finance">Financial Services</option>
                        <option value="Retail">Retail & E-commerce</option>
                        <option value="Manufacturing">Manufacturing</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.industry?.message}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="fw-bold px-4">
                    Save Changes
                </Button>
            </Form>
        </>
    );
};