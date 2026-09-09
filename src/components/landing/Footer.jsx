import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FiTwitter, FiGithub, FiLinkedin, FiCircle } from 'react-icons/fi';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='py-5 bg-light'>
            <Container className='py-4'>
                <div className='row g-4 mb-5'>

                    <div className='col-lg-4 pe-lg-5'>
                        <h4 className='fw-bold mb-3 text-primary'>Nexus</h4>
                        <p className='small mb-4 text-muted'>
                            The modern financial infrastructure for scaling enterprises. 
                            Automate your ledger, manage liquidity, and execute programmable payouts globally.
                        </p>
                        <div className='d-flex gap-3'>
                            <a href='https://www.x.com/' target='_blank' className='text-primary hover-lift transition-all'><FiTwitter size={20}/></a>
                            <a href='https://www.github.com/' target='_blank' className='text-primary hover-lift transition-all'><FiGithub size={20} /></a>
                            <a href='https://www.linkedin.com/' target='_blank' className='text-primary hover-lift transition-all'><FiLinkedin size={20} /></a>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-4'>
                        <h6 className='fw-bold text-primary mb-4'>Product</h6>
                        <ul className='list-unstyled space-y-2 small'>
                            <li className='mb-2'><Link to="/app" className='text-decoration-none text-muted link-primary'>Corporate Accounts</Link></li>
                            <li className='mb-2'><Link to="/app/transfer" className='text-decoration-none text-muted link-primary'>Global Payments</Link></li>
                            <li className='mb-2'><Link to="/app/ledger" className='text-decoration-none text-muted link-primary'>Smart Ledger</Link></li>
                            <li className='mb-2'><Link to="#pricing" className='text-decoration-none text-muted link-primary'>Pricing</Link></li>
                        </ul>
                    </div>

                    <div className='col-lg-2 col-md-4'>
                        <h6 className='fw-bold text-primary mb-4'>Company</h6>
                        <ul className='list-unstyled space-y-2 small'>
                            <li className='mb-2'><a href='/' className='text-decoration-none text-muted link-primary'>About Us</a></li>
                            <li className='mb-2'><a href='/' className='text-decoration-none text-muted link-primary'>Careers</a></li>
                            <li className='mb-2'><a href='/' className='text-decoration-none text-muted link-primary'>Privacy Policy</a></li>
                            <li className='mb-2'><a href='/' className='text-decoration-none text-muted link-primary'>Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className='d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 border-top border-secondary border-opacity-25 small text-center text-lg-left'>
                    <p className='mb-2 mb-md-0'>
                        &copy; {currentYear} <Link to="/" className='text-decoration-none'>Nexus</Link> Financial Technologies. All rights reserved.
                    </p>
                    <div className='d-flex align-items-center gap-2 mt-3 mt-md-0'>
                        <FiCircle size={10} className='text-success bg-success rounded animated' />
                        <span>All systems operational</span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}