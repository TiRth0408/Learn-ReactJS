import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, image, price, rating } = product;

  // Condition: Show "Best Seller" if rating is 4 or more
  const isBestSeller = rating?.rate >= 4;

  return (
    <div className="w-72 bg-white rounded-lg border border-gray-200 shadow transition-transform duration-300 hover:shadow-xl hover:scale-105 m-4 overflow-hidden">
      <Link to={`/product/${id}`} className="flex flex-col relative">
        {/* Product Image */}
        <div className="h-48 bg-gray-100 p-4 overflow-hidden relative">
          <img
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
            src={image}
            alt={title}
          />

          {/* Best Seller badge: always visible if rating >= 4 */}
          {isBestSeller && (
            <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
              Best Seller
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h2 className="font-semibold text-gray-800 hover:text-blue-600 line-clamp-2 mb-2 transition-colors duration-300">
            {title}
          </h2>

          <div className="text-sm text-gray-700">
            <p className="flex items-center mb-1">
              <span className="text-gray-600">Rating:</span>
              <span className="text-yellow-500 font-semibold ml-1">
                {rating?.rate ? `${rating.rate} ⭐` : "N/A"}
              </span>
            </p>
            <p className="flex items-center">
              <span className="text-gray-600">Price:</span>
              <span className="text-green-600 font-semibold ml-1">
                {price ? `$${price}` : "N/A"}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;

// HOF can stay as-is or be removed if unused
export const HOF = (WrappedProduct) => {
  return (props) => <WrappedProduct {...props} />;
};