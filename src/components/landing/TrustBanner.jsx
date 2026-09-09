import React from 'react';
import { FiBox, FiHexagon, FiTriangle, FiCircle, FiShield } from 'react-icons/fi';

export const TrustBanner = () => {
    return (
        <div className='py-5 border-top border-bottom' style={{ backgroundColor: '#0F172A', borderColor: 'rgba(255,255,255,0.05) !important' }}>
            <div className='container text-center'>
                <p className='fw-bold mb-4 text-uppercase' style={{ letterSpacing: '2px', fontSize: '0.8rem', color: '#64748B' }}>
                    Trusted by innovative financial teams globally
                </p>
                <div className='d-flex flex-wrap justify-content-center align-items-center gap-5 oapcity-50 text-white'>
                    <div className='d-flex align-items-center gap-2 fw-bold fs-5'><FiBox size={24} /> Wayne Ent.</div>
                    <div className='d-flex align-items-center gap-2 fw-bold fs-5'><FiHexagon size={24} /> Stark Ind.</div>
                    <div className='d-flex align-items-center gap-2 fw-bold fs-5'><FiTriangle size={24} /> CyberDyne</div>
                    <div className='d-flex align-items-center gap-2 fw-bold fs-5'><FiCircle size={24} /> InGen Corp</div>
                    <div className='d-flex align-items-center gap-2 fw-bold fs-5'><FiShield size={24} /> LexCorp.</div>
                </div>
            </div>
        </div>
    )
}