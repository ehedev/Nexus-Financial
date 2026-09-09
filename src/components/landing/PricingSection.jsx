import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { usePricingTiers } from '../../hooks/usePricingTiers';

export const PricingSection = () => {
    const { isAnnual, setIsAnnual, tiers, isLoading, error } = usePricingTiers();
    
    return (
        <section id='pricing' className='py-5'>
            <Container className='py-5'>
                <div className='text-center mb-lg-5'>
                    <h2 className='fw-bold display-6 mb-3'>Transparent Pricing for Scale</h2>
                    <p className='text-muted lead'>
                        No hidden fees. Choose the tier that matches your transaction volume.
                    </p>

                    <div className='d-flex justify-content-center align-items-center gap-3 mb-5'>
                        <div 
                            className="position-relative rounded-pill bg-light shadow-sm transition-all" 
                            style={{ width: '64px', height: '32px', cursor: 'pointer', border: '1px solid #dee2e6' }}
                            onClick={() => setIsAnnual(!isAnnual)}
                        >
                            <div
                                className="position-absolute rounded-circle bg-primary transition-all shadow" 
                                style={{
                                    top: '2px',
                                    left: isAnnual ? '34px' : '4px',
                                    width: '26px',
                                    height: '26px'
                                }}
                            />
                        </div>
                        <span className="fw-bold text-primary d-flex align-items-center gap-2" style={{ minWidth: '140px' }}>
                            {isAnnual ? 'Annually' : 'Monthly'}
                            {isAnnual && (
                                <span className="badge bg-success bg-opacity-25 text-success rounded-pill px-2 py-1 small animation-fade-in">
                                    Save 20%
                                </span>
                            )}
                        </span>
                    </div>

                    {isLoading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border" style={{ color: '#d97706' }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : error ? (
                        <div className="text-center py-5 text-danger opacity-75">
                            <p>{error}</p>
                        </div>
                    ) : (
                        <div className="row g-4 align-items-center">
                            {tiers.map((tier, index) => (
                            <div className="col-lg-4" key={index}>
                                <div 
                                className={`glass-panel border-primary shadow-sm p-4 p-xl-5 rounded-4 h-100 transition-all ${tier.isPopular ? 'hover-lift shadow-md' : ''}`}
                                style={{
                                    transform: tier.isPopular ? 'scale(1.03)' : 'scale(1)',
                                    zIndex: tier.isPopular ? 2 : 1
                                }}
                                >
                                {tier.isPopular && (
                                    <div className="text-center mb-4">
                                    <span className="badge bg-primary text-white text-uppercase fw-bold rounded-pill px-3 py-2" style={{ letterSpacing: '1px' }}>
                                        Most Popular
                                    </span>
                                    </div>
                                )}
                                
                                <h4 className="fw-bold mb-2">{tier.name}</h4>
                                <p className="small text-muted mb-4" style={{ minHeight: '40px' }}>{tier.description}</p>
                                
                                <div className="mb-4 pb-4 border-bottom border-secondary border-opacity-25">
                                    {tier.monthlyPrice === 'Custom' ? (
                                    <h2 className="display-5 fw-bold mb-0 text-primary text-center">Custom</h2>
                                    ) : (
                                    <div className="d-flex justify-content-center align-items-end gap-1">
                                        <h2 className="display-4 fw-bold mb-0 text-primary">${isAnnual ? tier.annualPrice : tier.monthlyPrice}</h2>
                                        <span className="text-muted mb-2">
                                            {isAnnual ? '/ yr' : '/ mo'}
                                        </span>
                                    </div>
                                    )}
                                </div>

                                <ul className="list-unstyled mb-5 space-y-3">
                                    {tier.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="d-flex align-items-center gap-3 mb-3">
                                        <div className="rounded-circle p-1 d-flex justify-content-center align-items-center bg-primary bg-opacity-25 text-primary">
                                            <FiCheck className='text-primary' size={14} strokeWidth={3} />
                                        </div>
                                        <span className='text-muted'>{feature}</span>
                                    </li>
                                    ))}
                                </ul>

                                <Link 
                                    to="/app" 
                                    className={`btn w-100 fw-bold py-3 ${tier.isPopular ? 'btn-primary' : 'btn-outline-primary'}`}
                                    style={tier.isPopular ? { backgroundColor: 'var(--bs-primary)', borderColor: 'var(--bs-primary)' } : {}}
                                >
                                    {tier.monthlyPrice === 'Custom' ? 'Contact Sales' : 'Get Started'}
                                </Link>
                                </div>
                            </div>
                            ))}
                        </div>
                    )}

                </div>
            </Container>
        </section>
    );
};