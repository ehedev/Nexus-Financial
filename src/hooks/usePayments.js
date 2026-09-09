import { useState } from 'react';

export const usePayments = () => {
    const [step, setStep] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProvider, setSelectedProvider] = useState(null);

    // Handlers to move forward
    const handleSelectCategory = (categoryId) => {
      setSelectedCategory(categoryId);
      setStep(2);
    };

    const handleSelectProvider = (provider) => {
      setSelectedProvider(provider);
      setStep(3);
    };

    // Triggered AFTER the user clicks "Done" on the modal inside PaymentForm
    const handleSuccess = () => {
      setStep(1); // Reset back to start
      setSelectedCategory(null);
      setSelectedProvider(null);
    };

    // Handlers to move backward
    const goBackToCategories = () => setStep(1);
    const goBackToProviders = () => setStep(2);

    return {
        step,
        selectedCategory,
        selectedProvider,
        handleSelectCategory,
        handleSelectProvider,
        handleSuccess,
        goBackToCategories,
        goBackToProviders
    };
};