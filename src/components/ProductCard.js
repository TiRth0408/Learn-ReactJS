import { useEffect, useState } from "react";
import Product from "./Product";
import Skeleton from "./Skeleton";
import { HOF } from "./Product";

export const ProductCard = () => {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();

    const timer = setInterval(() => {
      console.log("function component");
    }, 1000);

    return () => {
      console.log("cleanup function is called");
      clearInterval(timer);
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=20");
      const data = await response.json();

      // Format the product data
      const formattedProducts = data.products.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.thumbnail,
        rating: { rate: product.rating },
      }));

      setListOfProduct(formattedProducts);
      setFilteredProduct(formattedProducts);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const HOFComponent = HOF(Product);

  return listOfProduct.length === 0 ? (
    <Skeleton />
  ) : (
    <div>
      <div className="mt-5 flex mx-5 space-x-2">
        <div className="mt-2.5 flex">
          <input
            className="border border-gray-700 px-2 py-1.5 rounded-l-md outline-none"
            type="text"
            placeholder="Search products..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            onClick={() => {
              const filterProduct = listOfProduct.filter((product) =>
                product.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredProduct(filterProduct);
              setSearchText("");
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-r-md"
          >
            Search
          </button>
        </div>

        <button
          onClick={() => {
            const filterProduct = listOfProduct.filter(
              (product) => product.rating.rate >= 4
            );
            setFilteredProduct(filterProduct);
          }}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md mt-2"
        >
          Top Rated Product
        </button>
      </div>

      <div className="flex flex-wrap justify-center mt-5 mx-5">
        {filteredProduct.map((product) => {
          return product.rating.rate >= 4 ? (
            <HOFComponent key={product.id} product={product} />
          ) : (
            <Product key={product.id} product={product} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;