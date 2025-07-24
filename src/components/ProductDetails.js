import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";



const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const resData = await data.json();
    setSingleProduct(resData);
  }

  if (singleProduct === null) {
    return <Skeleton/>;
  }

  const { title, price, rating, image } = singleProduct;

  return (
    <div className="product">
      <img className="product_img" src={image} />
      <h2>{title}</h2>
      <p>Rating {rating.rate}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default ProductDetails;