// src/components/ProductDetails.js
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../Hook/useGetSingleProduct";
import Skeleton from "./Skeleton";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useGetSingleProduct(productId);

  if (!product) return <Skeleton />;

  const { title, price, image, description, rating } = product;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full max-w-xs max-h-[300px] object-contain rounded-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-yellow-600 text-lg font-medium">
            ⭐ {rating?.rate} Ratings
          </p>
          <p className="text-2xl font-bold text-green-700">Price: ${price}</p>
          <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
          <button className="w-fit px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;