import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Light");

  return (
    <div className="navbar">
      <h1>AJIO</h1>
      <ul className="menu_items">
        <li><Link to="/men">MEN</Link></li>
        <li><Link to="/women">WOMEN</Link></li>
        <li><Link to="/kid">KID</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/cart">CART</Link></li>
      </ul>
      <button onClick={() => {
        setBtnName(btnName === "Light" ? "Dark" : "Light");
      }}>
        {btnName}
      </button>
    </div>
  );
};

export default Navbar;
