import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, image, price, rating } = product;

  return (
    <div className="w-full sm:w-72 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-6 m-10">
      <Link to={`/product/${id}`}>
        <img
          className="w-full h-52 object-contain bg-gray-100 p-4 rounded-t-md"
          src={image}
          alt={title}
        />
        <div className="px-4 py-2">
          <h2 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
            {title}
          </h2>
        </div>
      </Link>
      <div className="px-4 pb-4 text-sm text-gray-700 space-y-1">
        <p className="flex items-center">
          <span className="font-medium text-gray-600">Rating:</span>&nbsp;
          <span className="text-yellow-500 font-semibold">
            {rating ? `${rating.rate} ⭐` : "N/A"}
          </span>
        </p>
        <p>
          <span className="font-medium text-gray-600">Price:</span>&nbsp;
          <span className="text-green-600 font-bold">${price}</span>
        </p>
      </div>
    </div>
  );
};

export default Product;