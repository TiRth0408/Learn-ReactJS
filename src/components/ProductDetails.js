import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton"
import useGetSingleProduct from "../Hook/useGetSingleProduct";

const ProductDetails = () => {

  const { productId } = useParams();
  const singleProduct = useGetSingleProduct(productId);

  if (singleProduct == null) {
    return <Skeleton />
  }

  const { image, title, price, description } = singleProduct;

  return (
    <div className="product">
      <img className="product_img" src={image} />
      <h1>{title}</h1>
      <p>{singleProduct.rating.rate} Ratings </p>
      <p>Price: {price}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetails;