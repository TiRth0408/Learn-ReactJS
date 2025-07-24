// named export
import { useEffect, useState } from "react"
import Product from "./Product"
import Skeleton from "./Skeleton";

export const ProductCard = () => {

  const [listOfProduct, setListOfProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();
    setListOfProduct(resData);
    setFilteredProduct(resData);
  }

  return listOfProduct.length === 0 ? <Skeleton /> : (
    <div>
      <div style={{ "marginTop": "10px" }}>
        <input type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText} />
        <button onClick={() => {
          const filterProduct = listOfProduct.filter((product) => {
            return product.title.toLowerCase().includes(searchText.toLowerCase());
          });
          setFilteredProduct(filterProduct);
          setSearchText("");

        }}>Search</button>
      </div>
      <button onClick={() => {

        const filterProduct = listOfProduct.filter(product => product.rating.rate >= 4);
        setFilteredProduct(filterProduct);

      }} style={{ "marginTop": "10px" }}>Top Rated Product</button>
      <div className="product_card">
        {
          filteredProduct.map((product) => {
            return (<Product key={product.id} product={product} />)
          })
        }
      </div>
    </div>
  )
}