import { useEffect, useState } from "react";
import Product from "./Product";

const Men = () => {
  const [products, setProducts] = useState([]);
  const MEN_CATEGORY_URL = "https://fakestoreapi.com/products/category/men%27s%20clothing"; // fixed encoding

  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        const response = await fetch(MEN_CATEGORY_URL);
        const data = await response.json();

        // Limit to 15 products (just in case more are added in the future)
        setProducts(data.slice(0, 15)); // ✅ FIXED: no `.products`
      } catch (error) {
        console.error("Failed to fetch men's clothing:", error);
      }
    };

    fetchMenProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Men;