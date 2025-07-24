import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
// Default export
import Navbar from "./components/Navbar";
// Named Export we use curly braces
import { ProductCard } from "./components/ProductCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Error from "./components/Error";
import Men from "./components/Men";
import Women from "./components/Women";
import Kid from "./components/kid";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element:<ProductCard />
      },
      {
        path: "/kid",
        element: <Kid />
      },
      {
        path: "/Men",
        element: <Men />
      },
      {
        path: "/Women",
        element: <Women />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/product/:ProductId",
        element: <ProductDetails/>
      }
    ],
    errorElement: <Error />
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

export * from "react-router-dom"