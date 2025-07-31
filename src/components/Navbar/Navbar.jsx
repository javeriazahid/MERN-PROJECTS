import React from "react";

function Navbar({ setPage, cartCount }) {
  return (
    <nav className="bg-black bg-opacity-90 p-4 flex justify-between items-center shadow-md text-white">
      <h1
        className="text-2xl font-extrabold text-yellow-400 cursor-pointer tracking-wide"
        onClick={() => setPage("home")}
      >
        ShoeStock
      </h1>
      <div className="space-x-6">
        <button
          onClick={() => setPage("home")}
          className="hover:text-yellow-400 transition"
        >
          Home
        </button>
        <button
          onClick={() => setPage("products")}
          className="hover:text-yellow-400 transition"
        >
          Products
        </button>
        <button
          onClick={() => setPage("cart")}
          className="relative hover:text-yellow-400 transition"
        >
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
