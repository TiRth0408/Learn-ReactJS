import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
// Default export
import Navbar from "./components/Navbar";
// Named Export we use curly braces
import { ProductCard } from "./components/ProductCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductCard />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);