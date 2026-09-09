import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiShield, FiGlobe, FiZap } from 'react-icons/fi';

export const ValuePropsSection = () => {
    return (
        <section className='py-5'>
            <Container className='py-5'>
                <Row className='g-4'>
                    <Col lg={4}>
                        <Card className='h-100 border-0 shadow-sm bg-light text-center p-4'>
                            <Card.Body>
                                <FiShield size={48} className='text-primary mb-3' />
                                <Card.Title className='fw-bold'>Bank-Grade Security</Card.Title>
                                <Card.Text className='text-muted'>
                                    AES-256 encryption, role-based access control (RBAC), and strict JWT token validation protect your treasury.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className='h-100 border-0 shadow-sm bg-light text-center p-4'>
                            <Card.Body>
                                <FiZap size={48} className='text-primary mb-3' />
                                <Card.Title className='fw-bold'>Lightning Fast</Card.Title>
                                <Card.Text className='text-muted'>
                                    Optimized React architecture utilizing React Query and useMemo to ensure your dashboard never lags.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className='h-100 border-0 shadow-sm bg-light text-center p-4'>
                            <Card.Body>
                                <FiGlobe size={48} className='text-primary mb-3' />
                                <Card.Title className='fw-bold'>API First</Card.Title>
                                <Card.Text className='text-muted'>
                                    Seamlessly connect your internal company software to our RESTful endpoints for automated reconciliation.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}