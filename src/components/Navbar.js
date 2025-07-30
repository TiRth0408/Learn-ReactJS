import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 px-6 py-4 shadow flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Product Shop
      </h1>

      <ul className="flex gap-4 text-gray-600 dark:text-gray-300">
        <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
        <li><Link to="/category/beauty">Makeup</Link></li>
        <li><Link to="/category/fragrances">Perfume</Link></li>
        <li><Link to="/category/furniture">Furniture</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;