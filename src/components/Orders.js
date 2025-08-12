import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">You have no orders yet.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="mb-6 p-4 bg-white shadow-md rounded-lg border"
          >
            <h2 className="font-semibold mb-2">
              Order ID: {order.id} — {order.date}
            </h2>
            <p className="text-sm mb-2">
              <strong>Name:</strong> {order.user.name} | <strong>Email:</strong>{" "}
              {order.user.email} | <strong>Phone:</strong> {order.user.phone}
            </p>
            <p className="text-sm mb-2">
              <strong>Address:</strong> {order.user.address}
            </p>
            <ul className="text-sm space-y-1 mb-2">
              {order.items.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
            <p className="font-bold">Total: ${order.total.toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;