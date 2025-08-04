import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

  const cartItems = useSelector((store) => store.cart.cartItems);
  const user = useContext(UserContext);
  return (
    <nav className="bg-indigo-500 bg-opacity-80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          AJIO
        </Link>

        <ul className="flex space-x-6 font-medium text-white">
          <li>
            <Link to="/" className="hover:text-indigo-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/men" className="hover:text-indigo-200 transition">
              Men
            </Link>
          </li>
          <li>
            <Link to="/women" className="hover:text-indigo-200 transition">
              Women
            </Link>
          </li>
          <li>
            <Link to="/electronics" className="hover:text-indigo-200 transition">
              Electronics
            </Link>
          </li>
          <li>
            <Link to="/jewelery" className="hover:text-indigo-200 transition">
              Jewelery
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-200 transition">
              About
            </Link>
          </li>
          {/* <li>{user.name}</li> */}
          <li>
            <Link to="/cart" className="relative hover:text-indigo-200 transition">
              🛒
              <span className="absolute -top-2 -right-3 text-white bg-red-500 px-1.5 py-0.5 text-xs rounded-full">
                {cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;