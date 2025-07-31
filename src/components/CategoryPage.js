import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Product";
import Skeleton from "./Skeleton";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategoryProducts();
  }, [categoryName]);

  const fetchCategoryProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch category:", err);
    }
    setLoading(false);
  };

  if (loading) return <Skeleton />;

  return (
    <div className="mt-6 px-4">
      <h2 className="text-xl font-semibold mb-4 capitalize">
        Category: {categoryName}
      </h2>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;