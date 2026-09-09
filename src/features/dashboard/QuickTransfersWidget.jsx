import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { useAccount } from '../../store/AccountContext';
import { AddFavoriteModal } from '../../components/ui/AddFavoriteModal';

export const QuickTransfersWidget = () => {
    const { favorites } = useAccount();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <AddFavoriteModal show={showModal} onHide={() => setShowModal(false)} />
            <div className='d-flex align-items-center gap-4 overflow-auto pb-2' style={{ whiteSpace: 'nowrap' }}>
                <div className='d-flex flex-column align-items-center' style={{ cursor: 'pointer' }}>
                    <div
                        className='d-flex flex-column align-items-center'
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowModal(true)}
                    >
                        <div className='bg-light text-primary rounded-cricle d-flex justify-content-center align-items-center mb-2 hover-lift transition-all border border-dashed' style={{ width: '56px', height: '56px' }}>
                            <FiPlus size={24} />
                        </div>
                        <small className='fw-500 text-muted'>Add New</small>
                    </div>
                </div>

                <div className='border-end' style={{ height: '40px' }}></div>

                {favorites.map(fav => (
                    <Link 
                        to="/app/transfer" 
                        state={{ prefillBeneficiary: fav.name }}
                        key={fav.id} 
                        className='text-decoration-none text-dark d-flex flex-column align-items-center hover-lift transition-all'
                    >
                        <div className={`${fav.color} text-white rounded-circle d-flex justify-content-center align-items-center mb-2 shadow-sm`} style={{ width: '56px', height: '56px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            {fav.initials}
                        </div>
                        <small className='fw-500'>{fav.name}</small>
                    </Link>
                ))}
            </div>
        </>
    )
}