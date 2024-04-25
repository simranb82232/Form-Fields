import React, { useState } from 'react';
import './FormPage1.css'; // Import CSS file for styling

const FormPage1 = ({ onNext }) => {
    const [legalBusinessName, setLegalBusinessName] = useState('');
    const [dbaName, setDbaName] = useState('');
    const [sameAsLegalBusinessName, setSameAsLegalBusinessName] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [typeOfOwnership, setTypeOfOwnership] = useState('');
    const [dateBusinessStarted, setDateBusinessStarted] = useState('');
    const [accountType, setAccountType] = useState('');

    const handleLegalBusinessNameChange = (e) => {
        setLegalBusinessName(e.target.value);
    };

    const handleDbaNameChange = (e) => {
        setDbaName(e.target.value);
    };

    const handleSameAsLegalBusinessNameChange = (e) => {
        setSameAsLegalBusinessName(e.target.checked);
        if (e.target.checked) {
            setDbaName(legalBusinessName);
        }
    };

    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
    };

    const handleTypeOfOwnershipChange = (e) => {
        setTypeOfOwnership(e.target.value);
    };

    const handleDateBusinessStartedChange = (e) => {
        setDateBusinessStarted(e.target.value);
    };

    const handleAccountTypeChange = (e) => {
        setAccountType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        // Pass the form data to the parent component
        onNext({
            legalBusinessName,
            dbaName,
            sameAsLegalBusinessName,
            companyName,
            typeOfOwnership,
            dateBusinessStarted,
            accountType
        });
    };

    return (
        <div className="page-container">
            <h1 className="header">Form Page 1</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label>Company Name:</label>
                        <input
                            type="text"
                            value={companyName}
                            onChange={handleCompanyNameChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Legal Business Name:</label>
                        <input
                            type="text"
                            value={legalBusinessName}
                            onChange={handleLegalBusinessNameChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>DBA (Doing Business As):</label>
                        <input
                            type="text"
                            value={dbaName}
                            onChange={handleDbaNameChange}
                            disabled={sameAsLegalBusinessName} // Disable if "Same as Legal Business Name" is checked
                            className="input-field"
                            disabled={sameAsLegalBusinessName}
                            required={!sameAsLegalBusinessName}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={sameAsLegalBusinessName}
                                onChange={handleSameAsLegalBusinessNameChange}
                            />
                            Same as Legal Business Name
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Type of Ownership:</label>
                        <select
                            value={typeOfOwnership}
                            onChange={handleTypeOfOwnershipChange}
                            className="input-field"
                            required
                        >
                            <option value="">Select an option</option>
                            <option value="Sole Proprietorship">Sole Proprietorship</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Corporation">Corporation</option>
                            <option value="LLC">LLC</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Date Business Started:</label>
                        <input
                            type="date"
                            value={dateBusinessStarted}
                            onChange={handleDateBusinessStartedChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Account Type:</label>
                        <label>
                            <input
                                type="radio"
                                value="New Account"
                                checked={accountType === 'New Account'}
                                onChange={handleAccountTypeChange}
                                required
                            />
                            New Account
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Additional Location"
                                checked={accountType === 'Additional Location'}
                                onChange={handleAccountTypeChange}
                                required
                            />
                            Additional Location
                        </label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit-button">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormPage1;