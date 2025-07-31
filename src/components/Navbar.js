import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          AJIO
        </Link>

        <ul className="flex space-x-6 font-medium text-gray-700">
          <li>
            <Link to="/men" className="hover:text-blue-500 transition">
              Men
            </Link>
          </li>
          <li>
            <Link to="/women" className="hover:text-blue-500 transition">
              Women
            </Link>
          </li>
          <li>
            <Link to="/electronics" className="hover:text-blue-500 transition">
              Electronics
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-500 transition">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;