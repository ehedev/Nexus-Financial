import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useFavoriteModal } from '../../hooks/useFavoriteModal';

export const AddFavoriteModal = ({ show, onHide }) => {
    const { name, setName, handleSubmit } = useFavoriteModal(onHide);

    return (
        <Modal show={show} onHide={onHide} centered animation={true}>
            <Modal.Header closeButton className='border-0 pb-0'>
                <Modal.Title className='fw-bold fs-5'>Add Quick Send Payee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-4'>
                        <Form.Label className='small text-muted'>Company or Beneficiary Name</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="e.g. Stripe Inc."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Button variant='primary' type="submit" className='w-100 fw-bold py-2'>
                        Add to Favorites
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}