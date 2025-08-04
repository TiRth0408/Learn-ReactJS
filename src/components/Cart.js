import { useDispatch, useSelector } from "react-redux";
import { clearItems, removeItemById } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItemById(id));
  };

  const handleClearCart = () => {
    dispatch(clearItems());
  };

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
                    ${item.price}
                  </p>
                  <p className="text-sm text-yellow-500 mt-1">
                    ⭐ {item.rating?.rate} ({item.rating?.count})
                  </p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="self-start sm:self-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-between items-center">
            <p className="text-lg font-medium">
              Total Items: {cartItems.length}
            </p>
            <button
              onClick={handleClearCart}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;