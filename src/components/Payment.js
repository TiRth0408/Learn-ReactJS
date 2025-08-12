import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearItems } from "../store/cartSlice";

const Payment = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.number || !formData.address) {
      alert("Please fill all fields before proceeding.");
      return;
    }

    // Create order object
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      user: {
        name: formData.name,
        email: formData.email,
        phone: formData.number,
        address: formData.address,
      },
      items: cartItems,
      total: totalPrice,
    };

    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    // Clear cart
    dispatch(clearItems());

    // Show success
    alert("✅ Order placed successfully!");

    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-2xl font-bold mb-6">Payment Details</h1>

      <p className="mb-4 text-lg font-semibold text-green-700">
        Total Price: ${totalPrice.toFixed(2)}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        ></textarea>

        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="card">Credit/Debit Card</option>
          <option value="upi">UPI</option>
          <option value="cod">Cash on Delivery</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;