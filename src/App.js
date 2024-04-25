import React, { useState } from 'react';
import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import './FormPage.css'; // Import CSS file for styling

const FormPage = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <div className="page-container">
            <h1 className="header">Form Page</h1>
            <div className="form-container">
                {currentStep === 1 && <FormPage1 onNext={handleNext} />}
                {currentStep === 2 && <FormPage2 onPrev={handlePrev} />}
            </div>
        </div>
    );
};

export default FormPage;
