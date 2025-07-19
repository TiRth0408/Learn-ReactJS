// named export

import { productList } from "../utils/constant"
import Product from "./Product"
export const ProductCard = () => {
  return (
    <div className="product_card">
      {
        productList.map((product) => {
          return (<Product key={product.id} product={product} />)
        })
      }
    </div>
  )
}
