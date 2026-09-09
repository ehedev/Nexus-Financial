import React from 'react';
import { Container } from 'react-bootstrap';
import { FiLock, FiEye, FiServer } from 'react-icons/fi';

export const SecuritySection = () => {
    return (
        <section id='features' className='py-5 bg-light border-top'>
            <Container className='py-3'>
                <div className='text-center mb-5'>
                    <h2 className='fw-bold text-metalic-silver display-6 mb-3'>Bank-Grade Security, Built In.</h2>
                    <p className='fs-5 mx-auto text-muted lead' style={{ maxWidth: '700px' }}>
                        We protect your corporate assets with state-of-the-art infrastructure. Built for zero-trust environments and continuous auditing.
                    </p>
                </div>

                <div className='row g-4 mt-4'>
                    <div className='col-lg-4'>
                        <div className='glass-panel p-4 p-lg-5 rounded-4 h-100 transition-all hover-lift'>
                            <div className='mb-4 text-center text-primary'>
                                <FiLock size={40} />
                            </div>
                            <h4 className='fw-bold mb-3 text-center'>AES Encryption</h4>
                            <p style={{ color: '#94A3B8' }}>
                                Military-grade encryption securing all transactions at rest and in transit. Your financial data never touches an unencrypted volume.
                            </p>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='glass-panel p-4 p-lg-5 rounded-4 h-100 transition-all hover-lift'>
                            <div className='mb-4 text-center text-primary'>
                                <FiEye size={40} />
                            </div>
                            <h4 className='fw-bold mb-3 text-center'>Role-Based Access</h4>
                            <p style={{ color: '#94A3B8' }}>
                                Granular Maker/Checker controls. Define exactly who on your team can view ledgers, initiate wires, and approve disbursements.
                            </p>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='glass-panel p-4 p-lg-5 rounded-4 h-100 transition-all hover-lift'>
                            <div className='mb-4 text-center text-primary'>
                                <FiServer size={40} />
                            </div>
                            <h4 className='fw-bold mb-3 text-center'>Immutable Audit Logs</h4>
                            <p style={{ color: '#94A3B8' }}>
                                Every API call and user action is recorded on a cryptographic ledger. Export clean, compliant reports instantly.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};