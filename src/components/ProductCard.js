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
    const timer = setInterval(() => {
      console.log('function component');
    }, 1000);

    return () => {
      console.log('cleanup function is called');
      clearInterval(timer);
    }
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();

    setListOfProduct(resData);
    setFilteredProduct(resData);
  }


  return listOfProduct.length === 0 ? <Skeleton /> : (
    <div>
      <div className="mt-5 flex mx-5 space-x-2">
        <div className="mt-2.5 flex">

          <input className="border border-gray-700 px-1.5 py-1.5" type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText} />

          <button onClick={() => {
            const filterProduct = listOfProduct.filter((product) => {
              return product.title.toLowerCase().includes(searchText.toLowerCase());
            });
            setFilteredProduct(filterProduct);
            setSearchText("");

          }} className="bg-blue-400 px-4 py-1.5 cursor-pointer"> Search
          </button>
        </div>
        
          <button onClick={() => {
            const filterProduct = listOfProduct.filter(product => product.rating.rate >= 4);
            setFilteredProduct(filterProduct);
          }} style={{ "marginTop": "10px" }} className="bg-blue-400 px-4 py-1.5 cursor-pointer">Top Rated Product
          </button>

      </div>

      <div className="flex flex-wrap justify-center mt-5 mx-5">
        {
          filteredProduct.map((product) => {
            return (<Product key={product.id} product={product} />)
          })
        }
      </div>

    </div>
  )
}