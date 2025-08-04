import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./store/Store";

// Lazy-loaded component
const About = lazy(() => import("./components/About"));

// Layout Component
const App = () => {
  const [userName, setUserName] = useState("Patel Tirth");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ name: userName, setUserName }}>
        <div className="min-h-screen bg-indigo-50">
          <Navbar />
          <Outlet />
          {/* Add Toaster globally */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 2000,
              style: {
                background: "#4f46e5",
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#4f46e5",
              },
            }}
          />
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: <Electronics />,
      },
      {
        path: "jewelery",
        element: <Jewelery />,
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
      },
    ],
  },
]);

// Render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);