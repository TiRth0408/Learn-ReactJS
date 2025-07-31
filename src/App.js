import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// Core components
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Men from "./components/Men";
import Women from "./components/Women";
import Electronics from "./components/Electronics"
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import { ProductCard } from "./components/ProductCard";
import CategoryPage from "./components/CategoryPage";

// Lazy-loaded components
const Grocery = lazy(() => import("./components/Electronics"));
const About = lazy(() => import("./components/About"));

// Layout Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Outlet />
    </div>
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
        index: true, // route: "/"
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
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "electronics",
        element: <Electronics />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

// Render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);