// named export
import { useState } from "react"
import { productList } from "../utils/constant"
import Product from "./Product"

export const ProductCard = () => {

  const [listOfProduct, setListOfProduct] = useState(productList);

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