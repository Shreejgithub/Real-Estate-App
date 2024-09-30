import React from 'react';
import './cancel.css'; // Importing a CSS file for styling

const Cancel = () => {
  return (
    <div className="cancel-container">
      <h1 className="cancel-title">Payment Canceled</h1>
      <p className="cancel-message">We're sorry to hear that you canceled your payment. If you have any questions, feel free to reach out.</p>
      <a href="/mylist" className="cancel-button">Go to Home</a>
    </div>
  );
};

export default Cancel;
