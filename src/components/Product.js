import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, image, price, rating } = product;

  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <img className="product_img" src={image} alt={title} />
        <h2>{title}</h2>
      </Link>
      <p>Rating: {rating ? rating.rate : "N/A"}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
