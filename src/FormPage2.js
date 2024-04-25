import React from 'react';
import './FormPage2.css'; // Import CSS file for styling

const FormPage2 = ({ onNext, onPrev }) => {
    return (
        <div className="page-container">
            <h1 className="header">Form Page 2</h1>
            <div className="form-container">
                <form className="form">
                    <div className="form-group">
                        {/* Form fields for Page 2 */}
                    </div>
                    <div className="form-group">
                        {/* Add previous and next buttons */}
                        <button type="button" className="previous-button" onClick={onPrev}>Previous</button>
                        <button type="button" className="next-button" onClick={onNext}>Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormPage2;
