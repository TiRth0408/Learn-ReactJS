import { useParams } from "react-router-dom";
import Skeleton from "./Skeleton"
import { useEffect, useState } from "react";

const ProductDetails = () => {
  
  const [singleProduct , setSingleProduct] = useState(null);
  const {productId} = useParams();

  useEffect(() => {
    fetchData();
  }, [productId]);

  const fetchData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const resData = await data.json();
    setSingleProduct(resData);
  }

  if (singleProduct === null) {
    return <Skeleton />
  }

  const { title, price, description, image } = singleProduct;

  return (
    <div className="product">
      <img className="product_img" src= {image} />
      <h2> {title} </h2>
      <p>{singleProduct.rating.rate} Ratings </p>
      <p> Price: {price} </p>
      <p> {description} </p>
    </div>
  );
};

export default ProductDetails;