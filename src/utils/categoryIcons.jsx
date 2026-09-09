import React from 'react';
import { FiWifi, FiZap, FiBriefcase, FiFileText } from 'react-icons/fi';

const ICON_MAP = {
    wifi: <FiWifi size={32} />,
    zap: <FiZap size={32} />,
    gov: <FiBriefcase size={32} />,
    invoice: <FiFileText size={32} />
};

export const getCategoryIcon = (iconKey) => {
    return ICON_MAP[iconKey] || <FiFileText Size={32} />;
};