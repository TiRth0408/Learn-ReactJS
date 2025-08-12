import { useDispatch, useSelector } from "react-redux";
import { clearItems, removeItemById, increaseQuantity } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveOne = (id) => {
    dispatch(removeItemById(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  // ✅ Calculate total price considering quantity
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={`${item.id}-${item.title}`}
                className="flex flex-col sm:flex-row gap-4 p-4 bg-white shadow-md rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Category: {item.category}
                  </p>
                  <p className="text-lg font-medium mt-1 text-indigo-700">
                    ${item.price} × {item.quantity}
                  </p>
                  <p className="text-sm text-yellow-500 mt-1">
                    ⭐ {item.rating?.rate} ({item.rating?.count})
                  </p>

                  {/* ✅ Quantity Controls */}
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => handleRemoveOne(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      −
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* ✅ Cart Summary */}
          <div className="mt-8 flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
            <div>
              <p className="text-lg font-medium">
                Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </p>
              <p className="text-lg font-semibold text-green-700">
                Total Price: ${totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleClearCart}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Clear Cart
              </button>
              <button
                onClick={() => navigate("/payment")}
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Go to Payment
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;