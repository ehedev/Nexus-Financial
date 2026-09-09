import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import { useMainLayout } from '../../hooks/useMainLayout';

export const MainLayout = () => {
    const { location, profile, handleSignOut, expanded, setExpanded } = useMainLayout();

    return (
        <>
            <Navbar bg="white" expand="lg" expanded={expanded} onToggle={(isExpanded) => setExpanded(isExpanded)} className="shadow-sm mb-4">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
                        Nexus Corporate
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/app/dashboard' active={location.pathname === '/app/dashboard'} className={location.pathname === '/app/dashboard' ? 'text-primary' : ''} onClick={() => setExpanded(false)}>
                                Dashboard
                            </Nav.Link>
                            <Nav.Link as={Link} to='/app/transfer' active={location.pathname === '/app/transfer'} className={location.pathname === '/app/transfer' ? 'text-primary' : ''} onClick={() => setExpanded(false)}>
                                Transfer Funds
                            </Nav.Link>
                            <Nav.Link as={Link} to='/app/payments' active={location.pathname === '/app/payments'} className={location.pathname === '/app/payments' ? 'text-primary' : ''} onClick={() => setExpanded(false)}>
                                Bill Payments
                            </Nav.Link>
                            <Nav.Link as={Link} to='/app/ledger' active={location.pathname === '/app/ledger'} className={location.pathname === '/app/ledger' ? 'text-primary' : ''} onClick={() => setExpanded(false)}>
                                Ledger
                            </Nav.Link>
                            <Nav.Link as={Link} to='/app/settings' active={location.pathname === '/app/settings'} className={location.pathname === '/app/settings' ? 'text-primary' : ''} onClick={() => setExpanded(false)}>
                                Settings
                            </Nav.Link>
                        </Nav>
                        <Nav className='align-items-lg-center mt-3 mt-lg-0'>
                            {profile && (
                                <div className='me-4 d-flex flex-column text-lg-end mb-2 mb-lg-0'>
                                    <span className='text-muted' style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase' }}>
                                        Available Balance
                                    </span>
                                    <span className='fw-bold text-primary' style={{ lineHeight: '1' }}>
                                        {formatCurrency(profile.availableBalance, profile.currency)}
                                    </span>
                                </div>
                            )}
                            <Button variant='outline-secondary' size='sm' onClick={() => {handleSignOut(); setExpanded(false)}} className='fw-500'>
                                Sign Out
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <Outlet />
            </Container>
        </>
    );
};