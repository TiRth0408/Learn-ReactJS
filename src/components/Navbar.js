import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Light");

  return (
    <div className="flex justify-between px-10 py-5 shadow-md">
      <h1 className="font-bold text-2xl" >AJIO</h1>
      <ul className="flex justify-between w-[40%]">
        <li><Link to="/men">MEN</Link></li>
        <li><Link to="/women">WOMEN</Link></li>
        <li><Link to="/kid">KID</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/cart">CART</Link></li>
        <li><Link to="/grocery">GROCERY</Link></li>
        {/* <button className="px-6 rounded-sm" onClick={() => {
          setBtnName(btnName === "Light" ? "Dark" : "Light");
        }}>
          {btnName}
        </button> */}
      </ul>

    </div>
  );
};

export default Navbar;