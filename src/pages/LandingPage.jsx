import React from 'react';
import { HeroSection } from '../components/landing/HeroSection';
import { MetricsSection } from '../components/landing/MetricsSection';
import { PricingSection } from '../components/landing/PricingSection';
import { FeaturesCarousel } from '../components/landing/FeaturesCarousel';
import { TrustBanner } from '../components/landing/TrustBanner';
import { ValuePropsSection } from '../components/landing/ValuePropsSection';
import { SecuritySection } from '../components/landing/SecuritySection';
import { CtaSection } from '../components/landing/CtaSection';
import { Footer } from '../components/landing/Footer';

const LandingPage = () => {
    return (
        <div className='bg-white'>
            <HeroSection />
            <MetricsSection />
            <PricingSection />
            <FeaturesCarousel />
            <TrustBanner />
            <ValuePropsSection />
            <SecuritySection />
            <CtaSection />
            <Footer />
        </div>
    )
}

export default LandingPage;