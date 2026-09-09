import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useServiceCategories } from '../../hooks/useServiceCategories';
import { getCategoryIcon } from '../../utils/categoryIcons';

export const ServiceCategories = ({ onSelectCategory }) => {
    const { categories } = useServiceCategories();

    return (
        <Row className='g-4'>
            {categories.map((cat) => (
                <Col md={6} lg={3} key={cat.id}>
                    <Card 
                        className='h-100 border-0 shadow-sm hover-lift transition-all'
                        style={{ cursor: 'pointer' }}
                        onClick={() => onSelectCategory(cat.id)}
                    >
                        <Card.Body className='p-4 text-center d-flex flex-column align-items-center'>
                            <div className={`mb-3 ${cat.color}`}>{getCategoryIcon(cat.iconKey)}</div>
                            <Card.Title className='fw-bold fs-5'>{cat.title}</Card.Title>
                            <Card.Text className='text-muted small mb-0'>{cat.desc}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};