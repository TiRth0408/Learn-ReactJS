const Product = ({ product }) => {

  const { title, image, price, rating } = product;

  return (
    <div className="product">
      <img className="product_img" src={image} />
      <h2>{title}</h2>
      <p>Rating {rating.rate}</p>
      <p>Price: {price}</p>
    </div>
  )
}
export default Product;