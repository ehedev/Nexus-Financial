import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { FiCheckCircle } from 'react-icons/fi';

export const SuccessModal = ({ show, onHide, title = 'Success!', message, buttonText = 'Done' }) => {
    const navigate = useNavigate();
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            backdrop="static"
            animation={true}
        >
            <Modal.Body className='text-center p-5'>
                <div className='mb-4'>
                    <FiCheckCircle size={72} className='text-success' />
                </div>

                <h4 className='fw-bold mb-3'>{title}</h4>
                <p className='text-muted mb-4'>{message}</p>

                <Button 
                    variant='primary' 
                    className='w-100 fw-bold py-2' 
                    onClick={() => {
                        onHide();
                        navigate('/app/dashboard');
                    }}
                >
                    {buttonText}
                </Button>
            </Modal.Body>
        </Modal>
    )
}