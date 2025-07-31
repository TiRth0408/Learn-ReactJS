import { useEffect, useState } from "react";
import Product from "./Product";

const Women = () => {
  const [products, setProducts] = useState([]);
  const WOMEN_CATEGORY_URL = "https://fakestoreapi.com/products/category/women%27s%20clothing"; // encoded '

  useEffect(() => {
    const fetchWomenProducts = async () => {
      try {
        const response = await fetch(WOMEN_CATEGORY_URL);
        const data = await response.json();

        // Limit to 15 products
        setProducts(data.slice(0, 15));
      } catch (error) {
        console.error("Failed to fetch women's clothing:", error);
      }
    };

    fetchWomenProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Women;