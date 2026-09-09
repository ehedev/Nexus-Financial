import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { useCopy } from '../../hooks/useCopy';

export const DeveloperForm = () => {
    const { copied, apiKey, secretKey, handleCopy } = useCopy();

    return (
        <>
            <Form.Group className='mb-3'>
                <Form.Label className='fw-500 small'>Public Key</Form.Label>
                <div className='d-flex gap-2'>
                    <Form.Control type='text' readOnly value={apiKey} className='bg-light text-muted' />
                    <Button 
                        variant={copied === 'public' ? "success" : "outline-secondary"} 
                        onClick={() => handleCopy(apiKey, 'public')}
                    >
                        {copied === 'public' ? <><FiCheck /></> : <><FiCopy /></>}
                    </Button>
                </div>
            </Form.Group>

            <Form.Group className='mb-4'>
                <Form.Label className='fw-500 small'>Secret Key</Form.Label>
                <div className='d-flex gap-2'>
                    <Form.Control type='password' readOnly value={secretKey} className='bg-light text-muted' />
                    <Button 
                        variant={copied === 'secret' ? "success" : "outline-secondary"} 
                        onClick={() => handleCopy(secretKey, 'secret')}
                    >
                        {copied === 'secret' ? <><FiCheck /></> : <><FiCopy /></>}
                    </Button>
                </div>
            </Form.Group>

            <Button variant='outline-danger' className='w-100 fw-500'>
                Roll API Keys
            </Button>
        </>
    );
};