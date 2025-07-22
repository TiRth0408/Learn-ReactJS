// named export
import { useEffect, useState } from "react"
import Product from "./Product"

export const ProductCard = () => {

  const [listOfProduct, setListOfProduct] = useState([]);

  useEffect(() => { 
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();
    console.log(resData);
    setListOfProduct(resData);
  }

  return (
    <div>
      <button onClick={() => {

        const filterProduct = listOfProduct.filter(product => product.rating.rate >= 4);
        setListOfProduct(filterProduct);

      }} style={{ "marginTop": "10px" }}>Top Rated Product</button>
      <div className="product_card">
        {
          listOfProduct.map((product) => {
            return (<Product key={product.id} product={product} />)
          })
        }
      </div>
    </div>
  )
}