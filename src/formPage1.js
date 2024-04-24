import React, { useState } from 'react';
//import { PDFDocument, rgb } from 'pdf-lib';
import './FormPage1.css'; // Import CSS file for styling

const FormPage1 = () => {
  // State variables for form fields
  const [companyName, setCompanyName] = useState('');
  const [legalName, setLegalName] = useState('');
  const [dba, setDba] = useState('');
  const [textInput4, setTextInput4] = useState('');
  const [textInput5, setTextInput5] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [multipleChoice, setMultipleChoice] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [acceptMasterVisa, setAcceptMasterVisa] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a new PDF document...
  };

  return (
    <div className="page-container">
    <h1>Business Overview</h1>
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Company Name:</label>
          <input type="text" value={textInput1} onChange={(e) => setTextInput1(e.target.value)} className="input-field" />
        </div>
        <div className="form-group">
          <label>Legal Business Name:</label>
          <input type="text" value={textInput2} onChange={(e) => setTextInput2(e.target.value)} className="input-field" />
        </div>
        <div className="form-group">
          <label>DBA ():</label>
          <input type="text" value={textInput3} onChange={(e) => setTextInput3(e.target.value)} className="input-field" />
        </div>
        <div className="form-group">
          <label>Type of Ownership:</label>
          <select value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)} className="input-field">
            <option value="">Select an option</option>
            <option value="Sole Proprietor">Sole Proprietor</option>
            <option value="Partnership">Partnership</option>
            <option value="Corporation">Corporation</option>
            <option value="LLC/LLP">LLC/LLP</option>
            <option value="Non-Profit">Non-Profit</option>
            {/* Populate options dynamically */}
          </select>
        </div>
        <div className="form-group">
          <label>Date Business Started:</label>
          <input type="text" value={textInput5} onChange={(e) => setTextInput5(e.target.value)} className="input-field" />
        </div>
        <div className="form-group">
          <label>Multiple Choice:</label>
          <label>
            <input type="radio" value="Option 1" checked={multipleChoice === 'Option 1'} onChange={() => setMultipleChoice('Option 1')} />
            Option 1
          </label>
          <label>
            <input type="radio" value="Option 2" checked={multipleChoice === 'Option 2'} onChange={() => setMultipleChoice('Option 2')} />
            Option 2
          </label>
        </div>
        <div className="form-group">
          <h2>Address</h2>
          <label>Street Address:</label>
          <input type="text" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} className="input-field" />
          {/* Repeat similar structure for city, state, and zip code */}
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" checked={acceptMasterVisa} onChange={(e) => setAcceptMasterVisa(e.target.checked)} />
            Accept Master/Visa
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default FormPage1;
