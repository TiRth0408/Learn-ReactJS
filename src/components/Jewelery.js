import { useEffect, useState } from "react";
import Product from "./Product"; // ✅ Adjust path if needed

const Jewelery = () => {
  const [products, setProducts] = useState([]);
  const JEWELERY_CATEGORY_URL = "https://fakestoreapi.com/products/category/jewelery";

  useEffect(() => {
    const fetchJeweleryProducts = async () => {
      try {
        const response = await fetch(JEWELERY_CATEGORY_URL);
        const data = await response.json();
        setProducts(data.slice(0, 15)); // ✅ limit to 15 products
      } catch (error) {
        console.error("Failed to fetch jewelery products:", error);
      }
    };

    fetchJeweleryProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Jewelery;