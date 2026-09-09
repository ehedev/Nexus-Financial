import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiActivity, FiDollarSign, FiPieChart, FiList, FiZap, FiCalendar } from 'react-icons/fi';
import { useAccount } from '../store/AccountContext';
import { formatCurrency } from '../utils/formatCurrency';

// << Import Analysis Charts >> // 
import { CashFlowChart } from '../features/dashboard/CashFlowChart';
import { ExpensePieChart } from '../features/dashboard/ExpensePieChart';
import { RecentActivityWidget } from '../features/dashboard/RecentActivityWidget';
import { ScheduledPaymentsWidget } from '../features/dashboard/ScheduledPaymentsWidget';
import { QuickTransfersWidget } from '../features/dashboard/QuickTransfersWidget';

const DashboardPage = () => {
    const { profile, transactions } = useAccount();

    return (
        <div className='animation-fade-in'>
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start mb-4'>
                <div>
                    <h2 className='fw-bold mb-1'>
                        Welcome back, {profile?.companyName || 'Corporate Admin'}
                    </h2>
                    <p className='text-muted mb-0=0'>Here is your financial overview for today.</p>
                </div>
                <Button as={Link} to="/app/transfer" variant="primary" className='fw-500'>
                    New Transfer <FiArrowRight className='ms-1' />
                </Button>
            </div>

            <Row className='g-4 mb-4'>
                <Col lg={4}>
                    <Card className='border-0 shadow-sm h-100 bg-primary text-white'>
                        <Card.Body className='p-4 d-flex flex-column justify-content-center'>
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <span className='text-white-50 text-uppercase fw-bold' style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>Available Liquidity</span>
                                <FiDollarSign size={24} className='text-white-50' />
                            </div>
                            <h1 className='fw-bold mb-2 fs-2 fs-md-3 fs-lg-4 fs-xl-5'>
                                {formatCurrency(profile?.availableBalance || 0)}
                            </h1>
                            <p className='text-white-50 small mb-0'>Updated just now</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={8}>
                    <Card className='border-0 shadow-sm h-100'>
                        <Card.Body className='p-4'>
                            <h5 className='fw-bold mb-0'>
                                <FiActivity className='me-2 text-primary'/>
                                Cash Flow (YTD)
                            </h5>
                            <CashFlowChart transactions={transactions} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Card className='border-0 shadow-sm mb-4'>
                <Card.Body className='px-4 oy-3'>
                    <div className='d-flex align-items-center'>
                        <h6 className='fw-bold mb-0 me-4 text-nowrap d-none d-md-block'>
                            <FiZap className='me-2 text-warning' />Quick Send:
                        </h6>
                        <div className='w-100 overflow-hidden'>
                            <QuickTransfersWidget />
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <Row className='g-4 mb-4'>
                <Col lg={4}>
                    <Card className='border-0 shadow-sm h-100'>
                        <Card.Body className='p-4'>
                            <h5 className='fw-bold mb-4'>
                                <FiPieChart className='me-2 text-warning' /> Top Payees
                            </h5>
                            <ExpensePieChart transactions={transactions} />
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={8}>
                    <Card className='border-0 shadow-sm h-100'>
                        <Card.Body className='p-4'>
                            <div className='d-flex justify-content-between align-items-center ,b-3'>
                                <h5 className='fw-bold mb-0'>
                                    <FiCalendar className='me-2 text-primary' /> Scheduled Payments
                                </h5>
                            </div>
                            <ScheduledPaymentsWidget />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            <Row className='g-4'>
                <Col>
                    <Card className='border-0 shadow-sm h-100'>
                        <Card.Body className='p-4'>
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <h5 className='fw-bold mb-0'>
                                    <FiList className='me-2 text-success' />Recent Activity
                                </h5>
                                <Link to='/app/ledger' className='text-decoration-none small fw-500'>View All</Link>
                            </div>
                            <RecentActivityWidget transactions={transactions} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default DashboardPage;