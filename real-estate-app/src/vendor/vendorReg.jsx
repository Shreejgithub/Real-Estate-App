import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import './vendorReg.css'; // Importing the CSS file

const VendorReg = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    propertyType: '',
    documents: '', // Treat documents as a simple string input field
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const history = useHistory(); // Initialize useHistory

  useEffect(() => {
    // Check if the admin has been accepted
    const isAccepted = localStorage.getItem('isAccepted');
    
    if (isAccepted) {
      // Redirect to "/filldetails" if admin is accepted
      history.push('/filldetails');

      // Optionally, clear the flag after redirecting
      localStorage.removeItem('isAccepted');
    }
  }, [history]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8001/api/admins/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Send data as JSON
        },
        body: JSON.stringify(formData), // Send form data as a string
      });

      if (!response.ok) {
        throw new Error('Failed to register vendor');
      }

      const result = await response.json();
      console.log('Vendor Registration Successful:', result);
      setSuccess('Registration successful!');
      setError(''); // Clear any previous errors

      // Redirect to ViewDetailAdmin after registration
      // history.push('/viewdetails'); // Use history.push for redirection
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(`Failed to register vendor: ${error.message}`);
    }
  };

  return (
    <div className="form-container">
      <h2>Vendor Registration</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit} className="vendor-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your address"
          />
        </div>
        <div className="form-group">
          <label>Property Type</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
          >
            <option value="">Select Property Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>
        <div className="form-group">
          <label>Documents</label>
          <input
            type="text"
            name="documents"
            value={formData.documents}
            onChange={handleChange}
            placeholder="Enter document details"
            required
          />
        </div>
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default VendorReg;
