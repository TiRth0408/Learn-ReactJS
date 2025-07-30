// src/Hook/useGetSingleProduct.js
import { useEffect, useState } from "react";

const useGetSingleProduct = (id) => {
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();

        const formattedProduct = {
          id: data.id,
          title: data.title,
          price: data.price,
          description: data.description,
          image: data.thumbnail,
          rating: { rate: data.rating },
        };

        setSingleProduct(formattedProduct);
      } catch (error) {
        console.error("Failed to fetch single product:", error);
      }
    };

    fetchSingleProduct();
  }, [id]);

  return singleProduct;
};

export default useGetSingleProduct;