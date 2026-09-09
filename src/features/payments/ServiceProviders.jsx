import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useServiceProviders } from '../../hooks/useServiceProviders';

export const ServiceProviders = ({ categoryId, onSelectProvider, onBack }) => {
    const { providers } = useServiceProviders(categoryId);

    return (
        <div className="animation-fade-in">
            <Button variant="link" className="text-muted p-0 mb-3 text-decoration-none" onClick={onBack}>
                &larr; Back to Categories
            </Button>
            
            <h4 className="fw-bold mb-4">Select Service Provider</h4>
            
            <Row className="g-3">
                {providers.map((provider) => (
                <Col md={4} key={provider.id}>
                    <Card 
                    className="border-0 shadow-sm hover-lift transition-all" 
                    style={{ cursor: 'pointer' }}
                    onClick={() => onSelectProvider(provider)}
                    >
                    <Card.Body className="p-3 text-center">
                        <h6 className="fw-bold mb-1">{provider.name}</h6>
                        <span className="text-muted small">{provider.type}</span>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
    );
};