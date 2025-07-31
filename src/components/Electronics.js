import { useEffect, useState } from "react";
import Product from "./Product"; // Adjust the path if needed

const Electronics = () => {
  const [products, setProducts] = useState([]);
  const ELECTRONICS_CATEGORY_URL = "https://fakestoreapi.com/products/category/electronics";

  useEffect(() => {
    const fetchElectronicsProducts = async () => {
      try {
        const response = await fetch(ELECTRONICS_CATEGORY_URL);
        const data = await response.json();
        setProducts(data.slice(0, 15)); // show only 15 products
      } catch (error) {
        console.error("Failed to fetch electronics products:", error);
      }
    };

    fetchElectronicsProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Electronics;