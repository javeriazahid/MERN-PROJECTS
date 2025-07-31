import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./cart.jsx";
import Home from "./components/home.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const handleSubmit = () => {
    alert("Order submitted!");
    setCart([]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar setPage={setPage} cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <div className="p-4">
        {page === "home" && <Home setPage={setPage} />}
        {page === "products" && (
          <Products handleAddToCart={handleAddToCart} />
        )}
        {page === "cart" && (
          <Cart
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default App;
