import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// Core components
import Navbar from "./components/Navbar";
import Men from "./components/Men";
import Women from "./components/Women";
import Electronics from "./components/Electronics";
import Jewelery from "./components/Jewelery";
import Error from "./components/Error";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import { ProductCard } from "./components/ProductCard";
import CompoA from "./components/CompoA";
import UserContext from "./utils/UserContext";

// Lazy-loaded components
const About = lazy(() => import("./components/About"));

// Layout Component
const App = () => {

  const [userName, setUserName] = useState("Patel Tirth");

  return (
    <UserContext.Provider value={{name: userName, setUserName}}>
      <div className="min-h-screen bg-indigo-50">
        <Navbar />
        {/* <CompoA /> */}
        <Outlet />
      </div>
    </UserContext.Provider>

  );
};

// Router setup
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <ProductCard />,
      },
      {
        path: "men",
        element: <Men />,
      },
      {
        path: "women",
        element: <Women />,
      },
      {
        path: "electronics",
        element: <Electronics />
      },
      {
        path: "jewelery",
        element: <Jewelery />
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      }
    ],
  },
]);

// Render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);