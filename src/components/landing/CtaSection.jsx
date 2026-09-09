import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CtaSection = () => {
    return (
        <section id="solutions" className='py-5 bg-primary text-white text-center'>
            <Container className='py-5'>
                <h2 className='display-6 fw-bold mb-3'>Ready to upgrade your financial stack?</h2>
                <p className='lead mb-4 opacity-75'>Join thousands of businesses managing their finances on Nexus.</p>
                <Button as={Link} to="/app" variant='light' size='lg' className='fw-bold px-5 text-primary shadow'>
                    Go to Dashboard
                </Button>
            </Container>
        </section>
    )
}