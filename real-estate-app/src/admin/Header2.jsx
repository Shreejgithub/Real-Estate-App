import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import "./header2.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../components/login/firebase";
import Swal from "sweetalert2";
import { nav2 } from "../components/data/Data";

const Header2 = () => {
  const [navList, setNavList] = useState(false);
  const history = useHistory(); // To navigate after logout

  useEffect(() => {
    // Inject custom CSS for SweetAlert2
    const style = document.createElement("style");
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

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase sign-out function

      // Show SweetAlert notification on successful logout
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged out successfully!",
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        customClass: {
          container: "custom-swal-container", // Apply custom class here
        },
      }).then(() => {
        // Redirect to the login page after the notification
        history.push("/vendorlogin");
      });

      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong while logging out.",
        customClass: {
          container: "custom-swal-container", // Apply custom class here
        },
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
              {nav2.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="button flex">
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

export default Header2;
