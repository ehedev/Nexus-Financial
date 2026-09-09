import React from 'react';
import { Button } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi'
import { useExportData } from '../../hooks/useExportData';

export const ExportData = ({ data }) => {
    const { handleExportCSV } = useExportData(data);
    
    return (
        <Button
            variant='outline-primary'
            className='fw-500 d-flex align-items-center gap-2 shadow-sm'
            onClick={handleExportCSV}
            disabled={!data || data.length === 0}
        >
            <FiDownload /> Export CSV
        </Button>
    )
};