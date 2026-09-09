export const useExportData = (data) => {
    const handleExportCSV = () => {
        if (!data || data.length === 0) return;

        const headers = ['Transaction ID', 'Date', 'Beneficiary', 'Description', 'Type', 'Amount', 'Status'];

        const csvRows = data.map(tx => {
            return [
                tx.id,
                tx.date,
                `"${tx.beneficiary || '-'}"`,
                `"${tx.description || ''}"`,
                tx.type,
                tx.amount,
                tx.status
            ].join(',');
        });

        const csvString = [headers.join(','), ...csvRows].join('\n');

        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `nexus_ledger_export_${new Date().toISOString().split('T')[0]}.csv`);

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return { handleExportCSV };
};