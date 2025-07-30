import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Product";
import Skeleton from "./Skeleton";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const filterKeyword = searchParams.get("filter")?.toLowerCase();

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategoryProducts();
  }, [categoryName, filterKeyword]);

  const fetchCategoryProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products/category/${encodeURIComponent(categoryName)}`);
      const data = await res.json();

      let products = data.products.map((product) => ({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.thumbnail,
        rating: { rate: product.rating },
      }));

      // Apply filter if "filter=fruit" or similar
      if (filterKeyword) {
        products = products.filter((p) =>
          p.title.toLowerCase().includes(filterKeyword)
        );
      }

      // ✅ Ensure only first 15 products are shown
      products = products.slice(0, 15);

      setCategoryProducts(products);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setLoading(false);
    }
  };

  if (loading) return <Skeleton />;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold capitalize mb-4">
        Category: {categoryName}
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {categoryProducts.length > 0 ? (
          categoryProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;