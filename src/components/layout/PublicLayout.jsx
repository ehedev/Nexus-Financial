import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { usePublicLayout } from '../../hooks/usePublicLayout';

export const PublicLayout = () => {
    const { isAuthenticated, handleLogout, expanded, setExpanded } = usePublicLayout();

    return (
        <div className='d-flex flex-column min-vh-100 bg-white'>
            <Navbar bg='white' expand="lg" expanded={expanded} onToggle={(isExpanded) => setExpanded(isExpanded)} className='border-bottom py-3'>
                <Container>
                    <Navbar.Brand as={Link} to="/" className='fw-bold text-primary fs-4'>
                        Nexus
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='public-navbar-nav' />
                    <Navbar.Collapse id='public-navbar-nav'>
                        <Nav className='mx-auto fw-500'>
                            <Nav.Link href='#features' className='text-dark link-primary mx-2' onClick={() => setExpanded(false)}>Features</Nav.Link>
                            <Nav.Link href='#solutions' className='text-dark link-primary mx-2' onClick={() => setExpanded(false)}>Solutions</Nav.Link>
                            <Nav.Link href='#pricing' className='text-dark link-primary mx-2' onClick={() => setExpanded(false)}>Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            {isAuthenticated ? (
                                <>
                                    <Button onClick={() => {handleLogout(), setExpanded(false)}} variant='outline-primary' className='me-lg-2 mb-2 mb-lg-0 fw-bold px-4'>
                                        Sign Out
                                    </Button>
                                    <Button as={Link} to="/app" variant="primary" className='fw-bold px-4 shadow-sm' onClick={() => setExpanded(false)}>
                                        Go to Dashboard
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button as={Link} to='/Login' variant='outline-primary' className='me-lg-2 mb-2 mb-lg-0 fw-bold px-4' onClick={() => setExpanded(false)}>
                                        Sign In
                                    </Button>
                                    <Button as={Link} to="/app" variant="primary" className='fw-bold px-4 shadow-sm' onClick={() => setExpanded(false)}>
                                        Open Dashboard
                                    </Button>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main>
                <Outlet />
            </main>
        </div>
    )
}