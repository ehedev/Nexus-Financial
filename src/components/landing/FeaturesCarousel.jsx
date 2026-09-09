import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import carouselImageOne from '../../assets/images/carousel_01.jpeg';
import carouselImageTwo from '../../assets/images/carousel_02.jpeg';
import carouselImageThree from '../../assets/images/carousel_03.jpeg';

export const FeaturesCarousel = () => {
    return (
        <section className='py-lg-5 bg-light'>
            <Container className='py-5 mb-5'>
                <div className='text-center mb-5'>
                    <h2 className='fw-bold display-6'>Everything your business needs</h2>
                    <p className='text-muted lead'>A complete suite of financial tools integrated into one platform.</p>
                </div>

                <Carousel className='shadow-lg rounded-4 overflow-hidden' variant="primary">
                    <Carousel.Item>
                        <img 
                            src={carouselImageOne}
                            alt='Global Transfers'
                            className='d-block w-100 object-fit-cover'
                            style={{ height: '500px', opacity: '0.85' }}
                        />
                        <Carousel.Caption className='bg-white p-4 rounded-3 shadow mb-4 text-center mx-auto' style={{ maxWidth: '500px', opacity: '0.95' }}>
                            <h3 className='fw-bold text-dark'>Global Wire Transfers</h3>
                            <p className='text-muted mb-0'>Send money across borders in 130+ currencies with real-time settlement and zero hidden fees.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={carouselImageTwo}
                            alt="Bill Payments"
                            className='d-block w-100 object-fit-cover'
                            style={{ height: '500px', opacity: '0.85' }}
                        />
                        <Carousel.Caption className='bg-white p-4 rounded-3 shadow mb-4 text-center mx-auto' style={{ maxWidth: '500px', opacity: '0.95' }}>
                            <h3 className='fw-bold text-dark'>Automated Bill Payments</h3>
                            <p className='text-muted mb-0'>Pay utilites, telecom, and vendor Invoices directly from your dashboard, Simulating the speed and reliability of Fawry.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={carouselImageThree}
                            alt="Real-time Ledger"
                            className='d-block w-100 object-fit-cover'
                            style={{ height: '500px', opacity: '0.85' }}
                        />
                        <Carousel.Caption className='bg-white p-4 rounded-3 shadow mb-4 text-center mx-auto' style={{ maxWidth: '500px', opacity: '0.95' }}>
                            <h3 className='fw-bold text-dark'>Real-Time Auditing</h3>
                            <p className='text-muted mb-0'>Track every penny with our advanced, filterable data grid. Export logs instantly for your accounting team.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    )
}