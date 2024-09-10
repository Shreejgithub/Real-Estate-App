import React, { useState } from "react";
import "./userlogin.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

const AdminRegistration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    try {
      console.log("Attempting to register admin...");
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Admin registration successful");

      // Show SweetAlert notification on successful registration
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Admin Registered Successfully!',
        showConfirmButton: false,
        timer: 1500,
        toast: true,
      }).then(() => {
        // Redirect to the admin dashboard after the notification
        history.push("/admin-dashboard");
      });
    } catch (error) {
      console.error("Error registering admin:", error.message);
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('This email is already in use. Please use a different email or log in.');
          break;
        case 'auth/weak-password':
          setError('The password is too weak. Please use at least 6 characters.');
          break;
        case 'auth/invalid-email':
          setError('The email address is invalid. Please enter a valid email.');
          break;
        default:
          setError(`Registration failed: ${error.message}`);
          break;
      }
    }
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '400px',
      margin: '17px auto',
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      animation: 'fadeIn 0.5s ease-in-out'
    }}>
      <img src="../images/quikr_homes_logo.png" alt="Logo" className="login-logo" />
      <h2>Admin Registration</h2>
      <form onSubmit={handleRegistration}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button">
          Register
        </button>
      </form>

      <div className="register-now">
        <p>
          Already have an admin account?{" "}
          <Link to="/adminlogin" className="register-link">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminRegistration;
