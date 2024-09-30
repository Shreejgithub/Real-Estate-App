import React from 'react';
import './success.css'; // Importing a CSS file for styling

const Success = () => {
  return (
    <div className="success-container">
      <h1 className="success-title">Payment Successful!</h1>
      <p className="success-message">Thank you for your purchase. Your payment has been processed successfully.</p>
      <a href="/mylist" className="success-button">Go to Home</a>
    </div>
  );
};

export default Success;
