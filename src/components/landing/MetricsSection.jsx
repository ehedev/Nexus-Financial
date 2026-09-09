import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const MetricsSection = () => {
    return (
        <section className='py-5 border-bottom'>
            <Container>
                <Row className='text-center g-4'>
                    <Col md={4}>
                        <h2 className='display-5 fw-bold text-primary mb-2'>$10B+</h2>
                        <p className='text-muted fw-500 mb-3 mb-lg-0'>Processed Annually</p>
                    </Col>

                    <Col md={4}>
                        <h2 className='display-5 fw-bold text-primary mb-2'>99.99%</h2>
                        <p className='text-muted fw-500 mb-3 mb-lg-0'>System Uptime</p>
                    </Col>

                    <Col md={4}>
                        <h2 className='display-5 fw-bold text-primary mb-2'>15,000+</h2>
                        <p className='text-muted fw-500 mb-0'>Enterprise Clients</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}