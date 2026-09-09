import { useState } from 'react';

export const useCopy = () => {
    const [copied, setCopied] = useState(false);
    const apiKey = "api_nx_8f92ma71p00xL";
    const secretKey = "secret_nx_8f92ma71p00xL";

    const handleCopy = async (text, keyType) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(keyType);

            setTimeout(() => setCopied(null), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    }

    return {
        copied,
        apiKey,
        secretKey,
        handleCopy
    };
};