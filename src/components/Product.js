import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, price, rating, image } = product;
  const isBestSeller = rating?.rate >= 4;

  return (
    <div className="w-72 m-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-indigo-100 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
      <Link to={`/product/${id}`} className="block p-4 text-center">
        {/* Best Seller Badge */}
        {isBestSeller && (
          <span className="absolute top-2 left-2 bg-indigo-500 text-white text-[11px] px-2 py-[2px] rounded-full shadow z-10">
            Best Seller
          </span>
        )}

        {/* Product Image */}
        <img
          src={image}
          alt={title}
          className="h-44 w-full object-contain mb-4"
        />

        {/* Title */}
        <h3 className="text-indigo-800 font-medium text-sm mb-2 h-12 leading-snug">
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </h3>

        {/* Price */}
        <p className="text-lg font-bold text-indigo-600">${price}</p>

        {/* Rating */}
        <p className="text-yellow-500 text-sm mt-1">
          ⭐ {rating?.rate} / 5
        </p>
      </Link>
    </div>
  );
};

export default Product;

// Optional HOF wrapper
export const HOF = (Component) => {
  return (props) => (
    <div className="hover:scale-105 transition-transform duration-300">
      <Component {...props} />
    </div>
  );
};