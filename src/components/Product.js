import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, price, rating, image } = product; // ✅ image is a string (FakeStoreAPI)
  const isBestSeller = rating?.rate >= 4;

  return (
    <div className="w-64 bg-white rounded-lg shadow-md m-3 transform transition duration-300 hover:scale-105 hover:shadow-xl relative">
      <Link to={`/product/${id}`} className="block p-4 text-center">
        {isBestSeller && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded shadow z-10">
            Best Seller
          </span>
        )}

        {/* ✅ Use single image from FakeStoreAPI */}
        <img
          src={image}
          alt={title}
          className="h-36 mx-auto object-contain mb-3"
        />

        <h3 className="text-sm font-medium mb-1">
          {title.length > 40 ? title.slice(0, 40) + "..." : title}
        </h3>

        <p className="text-green-600 font-semibold">${price}</p>

        <p className="text-yellow-500 text-sm mt-1">⭐ {rating?.rate} / 5</p>
      </Link>
    </div>
  );
};

export default Product;

// Highlight wrapper for top-rated products
export const HOF = (Component) => {
  return (props) => (
    <div>
      <Component {...props} />
    </div>
  );
};