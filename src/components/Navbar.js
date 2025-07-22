import { useState } from "react";
const Navbar = () => {
  // let btnName = "Light";
  const [btnName, setBtnName] = useState("Light");
  return (
    <div className="navbar">
      <h1>AJIO</h1>
      <ul className="menu_items">
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>CART</li>
        <button onClick={() => {
          btnName === "Light" ? setBtnName("Dark") : setBtnName("Light");
        }}>{btnName}</button>
      </ul>
    </div>
  );
};

export default Navbar;  // Default Export