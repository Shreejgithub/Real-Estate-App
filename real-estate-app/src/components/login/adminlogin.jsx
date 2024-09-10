import React, { useState } from "react";
import "./userlogin.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in with:", { email, password });

      // Show SweetAlert notification on successful login
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Successfully logged in!',
        showConfirmButton: false,
        timer: 1500,
        toast: true,
      }).then(() => {
        // Redirect to the admin dashboard after the notification
        history.push("/admin");
      });
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Failed to log in. Please check your email and password.");
    }
  };

  return (
    <div className="login-container">
     <img src="../images/quikr_homes_logo.png" alt="Logo" className="login-logo" />
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
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

        <div className="register-now">
          <p>New here? <Link to="/adminregisteration" className="register-link">Register now</Link></p>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <div className="login-options">
        <p>
          Not admin?{" "}
          <Link to="/" className="login-link">
            User Login
          </Link>{" "}
          |{" "}
          <Link to="/vendorlogin" className="login-link">
            Vendor Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
