import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero.jpeg'; 

export const HeroSection = () => {
    return (
        <section className='py-4 py-lg-5 bg-light border-bottom'>
            <Container className='py-lg-5'>
                <Row className='align-items-center'>
                    <Col lg={6} className='mb-5 mb-lg-0'>
                        <h1 className='display-4 fw-bold text-dark mb-4'>
                            Corporate Banking, <span className='text-primary'>Engineered for Scale.</span>
                        </h1>
                        <p className='lead text-muted mb-4 pe-lg-5'>
                            Manage your treasury, execute high-volume global transfers, and automate your bill payments with our enterprise-grade financial API and dashboard.
                        </p>
                        <div className='d-flex flex-column flex-md-row gap-3'>
                            <Button as={Link} to="/app" variant="primary" size='lg' className='fw-bold px-4 shadow-sm'>
                                Discover More
                            </Button>
                            <Button href='#features' variant='outline-secondary' size='lg' className='fw-bold px-4'>
                                Explore Features
                            </Button>
                        </div>
                    </Col>

                    <Col>
                        <img 
                            src={heroImage}
                            alt='Corporate Banking Dashboard'
                            className='img-fluid rounded-4 shadow-lg'
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}