import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { ProductId } = useParams(); // ✅ Get ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${ProductId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <div className="details-info">Rating: {product.rating ? product.rating.rate : "N/A"}</div>
      <div className="details-info">Price: ${product.price}</div>
      <p className="description">{product.description}</p>
    </div>
  );
};

export default ProductDetails;