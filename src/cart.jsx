
import React from "react";

function Cart({ cart, handleRemoveFromCart, handleSubmit }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>PKR {item.price} x {item.quantity}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Submit Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
