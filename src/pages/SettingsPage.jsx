import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { ProfileForm } from '../features/settings/ProfileForm';
import { DeveloperForm } from '../features/settings/DeveloperForm';

const SettingsPage = () => {
    return (
        <div className='animation-fade-in'>
            <h2 className='fw-bold mb-4'>Account Settings</h2>

            <Row className='g-4'>
                <Col lg={7}>
                    <Card className='border-0 shadow-sm p-4 mb-4'>
                        <h5 className='fw-bold mb-3'>Corporate Profile</h5>
                        <p className='text-muted small mb-4'>Update your business details and primary contact information.</p>
                        <ProfileForm />
                    </Card>
                </Col>

                <Col lg={5}>
                    <Card className='border-0 shadow-sm p-4'>
                        <h5 className='fw-bold mb-3'>Developer API</h5>
                        <p className='text-muted small mb-4'>
                            Use these credentials to integrate your internal software with the Nexus REST API. Do not share your secret key.
                        </p>
                        <DeveloperForm />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default SettingsPage;