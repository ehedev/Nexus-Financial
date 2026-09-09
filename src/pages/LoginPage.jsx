import React from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

const LoginPage = () => {
    const {
        authError,
        register, handleSubmit, errors,
        onSubmit
    } = useLogin();

    return (
        <Container className='d-flex align-items-center justify-content-center min-vh-100 py-5'>
            <Card className='border-0 shadow-lg' style={{ maxWidth: '480px', width: '100%' }}>
                <Card.Body className='p-5'>
                    <div className='text-center mb-4'>
                        <h2 className='fw-bold text-primary'>Nexus Sign In</h2>
                        <p className='text-muted'>Access your corporate dashboard</p>
                    </div>

                    {authError && <Alert variant='danger'>{authError}</Alert>}

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className='mb-3'>
                            <Form.Label className='fw-500'>Corporate Email</Form.Label>
                            <Form.Control 
                                type='email'
                                placeholder="admin@acmecorp.com"
                                isInvalid={!!errors.email}
                                {...register('email')}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='mb-4'>
                            <Form.Label className='fw-500'>Password</Form.Label>
                            <Form.Control 
                                type='password'
                                placeholder='********'
                                isInvalid={!!errors.password}
                                {...register('password')}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.password?.message}</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant='primary' type='submit' className='w-100 fw-bold py-2 mb-3'>
                            Sign In to Dashboard
                        </Button>

                        <div className='text-center'>
                            <Link to='/' className='text-decoration-none text-muted small'>
                            &larr; Back to Home</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default LoginPage;