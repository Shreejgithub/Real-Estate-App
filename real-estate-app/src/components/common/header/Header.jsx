import React, { useState, useEffect } from "react";
import "./header.css";
import { Link, useHistory } from "react-router-dom";
import { nav } from "../../data/Data";
import { auth } from "../../login/firebase";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";



const Header = () => {
  const [navList, setNavList] = useState(false);
  const history = useHistory(); // To navigate after logout

  useEffect(() => {
    // Inject custom CSS for SweetAlert2
    const style = document.createElement('style');
    style.innerHTML = `
      .custom-swal-container {
        margin-top: 80px !important; /* Add a top margin */
      }
    `;
    document.head.appendChild(style);

    // Cleanup the style when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleMyListClick = () => {
    history.push('/mylist');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase sign-out function

      // Show SweetAlert notification on successful logout
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Logged out successfully!',
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        customClass: {
          container: 'custom-swal-container' // Apply custom class here
        }
      }).then(() => {
        // Redirect to the login page after the notification
        history.push("/");
      });

      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while logging out.',
        customClass: {
          container: 'custom-swal-container' // Apply custom class here
        }
      });
    }
  };

  return (
    <>
      <header>
        <div className="container flex">
          <div className="Logo">
            <img src="./images/quikr_homes_logo.png" alt="Logo" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="button flex">
      <h4 onClick={handleMyListClick} style={{ cursor: 'pointer' }}>
        <span>2</span>My Cart
      </h4>
      <button className="btn1" onClick={handleLogout}>
        <i className="fa fa-sign-out"></i> Logout
      </button>
    </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;