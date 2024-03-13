import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleLogin = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <h1 className="logo">ReactEats</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={handleLogin}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
