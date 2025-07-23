import { useState } from "react";
import {Link} from "react-router";
const Navbar = () => {
  // let btnName = "Light";
  const [btnName, setBtnName] = useState("Light");
  return (
    <div className="navbar">
      <h1>AJIO</h1>
      <ul className="menu_items">
        <li> <Link to="/men">MEN</Link> </li>
        <li> <Link to="/women">WOMEN</Link> </li>
        <li> <Link to="/kid">KID</Link> </li>
        <li> <Link to="/cart">CART</Link> </li>
        <button onClick={() => {
          btnName === "Light" ? setBtnName("Dark") : setBtnName("Light");
        }}>{btnName}</button>
      </ul>
    </div>
  );
};

export default Navbar;  // Default Export